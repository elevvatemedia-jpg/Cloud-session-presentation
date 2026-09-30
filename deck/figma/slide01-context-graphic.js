// Slide 01: replace the Home window with a context-source manifold.
// Run via the Figma MCP `use_figma` tool against fileKey nZCVLnHAeYLKMJNc6748ay.
//
// Concept: a row of source pills across the full content width, each dropping a
// hairline to a shared spine, the spine feeding one line down into a single dark
// ValenOS node. Many places in, one context layer out. Reads in a second and
// backs up the word "context" in the subhead instead of leaving it as a claim.

const C = {
  paper:{r:0.98039,g:0.98039,b:0.97647}, ink:{r:0.10588,g:0.09412,b:0.07843},
  muted:{r:0.41961,g:0.40000,b:0.36863}, light:{r:0.65882,g:0.63922,b:0.60000},
  gold:{r:0.78431,g:0.66275,b:0.43137}, white:{r:1,g:1,b:1},
  hair:{r:0.89,g:0.878,b:0.855},
};
const FR="Fraunces", MA="Manrope";
await Promise.all(["Regular","Medium","SemiBold"].map(s=>figma.loadFontAsync({family:MA,style:s}))
  .concat([figma.loadFontAsync({family:FR,style:"Regular"})]));

function F(p,x,y,w,h,fill,r){const f=figma.createFrame();p.appendChild(f);f.resize(w,h);
  f.fills=fill?[{type:"SOLID",color:fill}]:[];if(r!==undefined)f.cornerRadius=r;f.x=x;f.y=y;return f;}
function R(p,x,y,w,h,fill,op){const n=figma.createRectangle();p.appendChild(n);n.resize(w,h);
  n.fills=[{type:"SOLID",color:fill}];if(op!==undefined)n.opacity=op;n.x=x;n.y=y;return n;}
function D(p,x,y,d,fill){const n=figma.createEllipse();p.appendChild(n);n.resize(d,d);
  n.fills=[{type:"SOLID",color:fill}];n.x=x;n.y=y;return n;}
function T(p,style,size,color,chars,x,y,w,o){o=o||{};const t=figma.createText();p.appendChild(t);
  t.fontName={family:o.fam||MA,style};t.fontSize=size;t.characters=chars;t.fills=[{type:"SOLID",color}];
  if(o.lh)t.lineHeight={unit:"PIXELS",value:o.lh};
  if(o.ls!==undefined)t.letterSpacing={unit:"PIXELS",value:o.ls};
  if(o.align)t.textAlignHorizontal=o.align;
  if(w){t.textAutoResize="HEIGHT";t.resize(w,t.height);}
  t.x=x;t.y=y;t.name=o.name||chars.slice(0,20);return t;}

const s1 = await figma.getNodeByIdAsync("2:2");

// Clear the old hero window, its glow, and any previous graphic.
for (const nm of ["Home window","glow","Context sources"]) {
  const n = s1.children.find(c => c.name === nm);
  if (n) n.remove();
}

// Subhead now points at the graphic rather than asserting context on its own.
const sub = s1.children.find(c => c.name === "sub");
await Promise.all(sub.getStyledTextSegments(["fontName"]).map(s => figma.loadFontAsync(s.fontName)));
sub.characters = "ValenOS is an AI-native CRM. It reads everywhere your customer context already lives, so its agents work from the whole relationship rather than a single prompt.";
sub.y = 414; sub.resize(1020, sub.height);

// ---- the manifold ----
const G = F(s1, 120, 636, 1680, 320, null); G.name = "Context sources"; G.fills = [];

const labels = ["Gmail","Outlook","Google Calendar","Google Meet","Slack","Apollo","Calls & recordings","and more"];
const PAD = 44, FS = 19, CH = 48;

// Measure each label, then distribute the leftover width as even gaps.
const widths = labels.map(function(l){
  const probe = T(G,"Medium",FS,C.ink,l,0,0);
  const w = probe.width; probe.remove(); return w + PAD;
});
const total = widths.reduce(function(a,b){return a+b;},0);
const gap = (1680 - total) / (labels.length - 1);

let x = 0; const centers = [];
labels.forEach(function(l,i){
  const w = widths[i];
  const last = i === labels.length - 1;
  const box = F(G, x, 20, w, CH, last ? null : C.white, 10);
  if (last) { box.fills = []; box.strokes = [{type:"SOLID",color:C.hair}]; box.dashPattern = [4,4]; }
  else { box.strokes = [{type:"SOLID",color:C.hair}]; }
  box.strokeWeight = 1;
  box.name = "src:" + l;
  T(box,"Medium",FS,last ? C.light : C.ink,l,PAD/2,12,w-PAD,{lh:24,align:"CENTER",name:"lbl"});
  centers.push(x + w/2);
  x += w + gap;
});

// hairlines down from each pill, a shared spine, then one line into the node
centers.forEach(function(cx){ R(G, cx-1, 68, 2, 72, C.light, 0.7); });
R(G, centers[0]-1, 138, centers[centers.length-1] - centers[0] + 2, 2, C.light, 0.7);
centers.forEach(function(cx){ D(G, cx-5, 134, 10, C.gold); });

const mid = (centers[0] + centers[centers.length-1]) / 2;
R(G, mid-1, 140, 2, 70, C.light, 0.7);

const node = F(G, mid-310, 210, 620, 104, C.ink, 10);
node.strokes = [{type:"SOLID",color:C.gold}]; node.strokeWeight = 1.5; node.name = "ValenOS core";
node.effects = [{type:"DROP_SHADOW",color:{r:0.10,g:0.09,b:0.08,a:0.18},offset:{x:0,y:12},radius:32,spread:0,visible:true,blendMode:"NORMAL"}];
T(node,"Regular",30,C.paper,"ValenOS",0,22,620,{fam:FR,align:"CENTER",ls:-0.6,name:"core-a"});
T(node,"Regular",15,C.light,"one context layer, read by every agent",0,64,620,{align:"CENTER",name:"core-b"});

s1.speakerNotes = "**0:00 to 0:25**\n\n- Open on the line, then stop. Let it sit.\n- Every CRM you have used is a filing cabinet. You feed it, it remembers. That is the whole deal.\n- Then gesture at the row: all of this is where the context already lives, and it is scattered. We pull it into one layer that every agent reads.\n- Do not name every logo. The point is the shape of the picture, not the list.";

await s1.screenshot();
return { slideId: s1.id, graphicId: G.id, pillCount: labels.length };
