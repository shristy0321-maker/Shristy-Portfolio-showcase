import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Upload, LogOut, ArrowLeft, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

type CS = {
  id?: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string | null;
  presentation_url: string | null;
  report_url: string | null;
  featured: boolean;
  badge: string | null;
  sort_order: number;
  overview?: string | null;
  problem_statement?: string | null;
  user_research?: string | null;
  key_insights?: string | null;
  solution?: string | null;
  impact?: string | null;
};

const emptyCS: CS = {
  slug: "", title: "", description: "", tags: [], thumbnail: null,
  presentation_url: null, report_url: null, featured: false, badge: null, sort_order: 0,
};

const Admin = () => {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [editing, setEditing] = useState<CS | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) { navigate("/auth"); return; }
      setUserId(session.user.id);
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    });
  }, [navigate]);

  const { data: caseStudies, refetch } = useQuery({
    queryKey: ["admin_case_studies"],
    queryFn: async () => {
      const { data, error } = await supabase.from("case_studies").select("*").order("sort_order");
      if (error) throw error;
      return data as CS[];
    },
  });

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const openNew = () => { setEditing({ ...emptyCS }); setOpen(true); };
  const openEdit = (cs: CS) => { setEditing({ ...cs }); setOpen(true); };

  const save = async () => {
    if (!editing) return;
    const payload = { ...editing };
    try {
      if (payload.id) {
        const { error } = await supabase.from("case_studies").update(payload).eq("id", payload.id);
        if (error) throw error;
        toast.success("Case study updated");
      } else {
        const { error } = await supabase.from("case_studies").insert(payload);
        if (error) throw error;
        toast.success("Case study created");
      }
      setOpen(false);
      qc.invalidateQueries({ queryKey: ["case_studies"] });
      refetch();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this case study?")) return;
    const { error } = await supabase.from("case_studies").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Deleted");
    qc.invalidateQueries({ queryKey: ["case_studies"] });
    refetch();
  };

  const uploadFile = async (field: "thumbnail" | "presentation_url" | "report_url", file: File) => {
    if (!editing) return;
    const ext = file.name.split(".").pop();
    const path = `${field}/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("case-study-assets").upload(path, file);
    if (error) { toast.error(error.message); return; }
    const { data } = await supabase.storage.from("case-study-assets")
      .createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
    if (data?.signedUrl) {
      setEditing({ ...editing, [field]: data.signedUrl });
      toast.success("Uploaded");
    }
  };

  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card-elevated p-8 max-w-md text-center">
          <h1 className="font-display text-2xl font-bold mb-3">Admin access required</h1>
          <p className="text-sm text-muted-foreground mb-2">
            Your account is signed in but doesn't have admin privileges yet.
          </p>
          <p className="text-xs text-muted-foreground mb-6 font-mono bg-muted p-2 rounded break-all">
            User ID: {userId}
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Ask the project owner to grant your user the <strong>admin</strong> role in the backend.
          </p>
          <Button onClick={signOut} variant="outline" className="w-full">
            <LogOut size={14} className="mr-1" /> Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border bg-background">
        <div className="section-container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft size={18} /></Link>
            <h1 className="font-display text-xl font-bold">Case Studies CMS</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={openNew}><Plus size={14} className="mr-1" /> New</Button>
            <Button variant="outline" onClick={signOut}><LogOut size={14} className="mr-1" /> Sign Out</Button>
          </div>
        </div>
      </header>

      <main className="section-container py-8">
        <div className="grid gap-4">
          {caseStudies?.map((cs) => (
            <div key={cs.id} className="card-elevated p-5 flex items-start gap-4">
              <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden shrink-0">
                {cs.thumbnail && <img src={cs.thumbnail} alt={cs.title} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{cs.title}</h3>
                  {cs.featured && <span className="chip-accent">Featured</span>}
                </div>
                <p className="text-xs text-muted-foreground mb-1">/{cs.slug}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{cs.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button size="sm" variant="outline" onClick={() => openEdit(cs)}><Pencil size={14} /></Button>
                <Button size="sm" variant="outline" onClick={() => remove(cs.id!)}><Trash2 size={14} /></Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Edit" : "New"} Case Study</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Title</Label><Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></div>
                <div><Label>Slug</Label><Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} /></div>
              </div>
              <div><Label>Short Description</Label><Textarea value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></div>
              <div><Label>Tags (comma-separated)</Label>
                <Input value={editing.tags.join(", ")} onChange={(e) => setEditing({ ...editing, tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Badge</Label><Input value={editing.badge ?? ""} onChange={(e) => setEditing({ ...editing, badge: e.target.value || null })} /></div>
                <div><Label>Sort Order</Label><Input type="number" value={editing.sort_order} onChange={(e) => setEditing({ ...editing, sort_order: Number(e.target.value) })} /></div>
              </div>
              <div className="flex items-center gap-2"><Switch checked={editing.featured} onCheckedChange={(c) => setEditing({ ...editing, featured: c })} /><Label>Featured</Label></div>

              {(["thumbnail", "presentation_url", "report_url"] as const).map((field) => (
                <div key={field} className="border border-border rounded-lg p-3">
                  <Label className="capitalize">{field.replace("_url", "").replace("_", " ")}</Label>
                  <div className="flex gap-2 mt-1">
                    <Input value={editing[field] ?? ""} onChange={(e) => setEditing({ ...editing, [field]: e.target.value || null })} placeholder="URL or upload below" />
                    <label className="inline-flex items-center justify-center px-3 rounded-md border border-input bg-background cursor-pointer hover:bg-accent hover:text-accent-foreground text-sm shrink-0">
                      <Upload size={14} />
                      <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && uploadFile(field, e.target.files[0])} />
                    </label>
                    {editing[field] && (
                      <Button size="icon" variant="outline" onClick={() => setEditing({ ...editing, [field]: null })}><X size={14} /></Button>
                    )}
                  </div>
                </div>
              ))}

              <div><Label>Overview</Label><Textarea rows={3} value={editing.overview ?? ""} onChange={(e) => setEditing({ ...editing, overview: e.target.value })} /></div>
              <div><Label>Problem Statement</Label><Textarea rows={3} value={editing.problem_statement ?? ""} onChange={(e) => setEditing({ ...editing, problem_statement: e.target.value })} /></div>
              <div><Label>User Research</Label><Textarea rows={3} value={editing.user_research ?? ""} onChange={(e) => setEditing({ ...editing, user_research: e.target.value })} /></div>
              <div><Label>Key Insights</Label><Textarea rows={3} value={editing.key_insights ?? ""} onChange={(e) => setEditing({ ...editing, key_insights: e.target.value })} /></div>
              <div><Label>Solution</Label><Textarea rows={3} value={editing.solution ?? ""} onChange={(e) => setEditing({ ...editing, solution: e.target.value })} /></div>
              <div><Label>Impact</Label><Textarea rows={3} value={editing.impact ?? ""} onChange={(e) => setEditing({ ...editing, impact: e.target.value })} /></div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
