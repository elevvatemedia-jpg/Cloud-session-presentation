// Slide 07: the agent workflow chain.
// Run via the Figma MCP `use_figma` tool against fileKey nZCVLnHAeYLKMJNc6748ay.
// Written but not applied: the Starter plan's 20 calls/month budget was spent.
// Also reorders the slide grid and renumbers every header to /11.

const C = {
  paper:{r:0.98039,g:0.98039,b:0.97647}, ink:{r:0.10588,g:0.09412,b:0.07843},
  muted:{r:0.41961,g:0.40000,b:0.36863}, light:{r:0.65882,g:0.63922,b:0.60000},
  gold:{r:0.78431,g:0.66275,b:0.43137}, white:{r:1,g:1,b:1},
  hair:{r:0.89,g:0.878,b:0.855}, tint:{r:0.965,g:0.957,b:0.941},
  goldsoft:{r:0.957,g:0.925,b:0.855},
};
const FR="Fraunces", MA="Manrope";
await Promise.all(["Regular","Medium","SemiBold"].map(s=>figma.loadFontAsync({family:MA,style:s}))
  .concat([figma.loadFontAsync({family:FR,style:"Regular"})]));

function F(p,x,y,w,h,fill,r){const f=figma.createFrame();p.appendChild(f);f.resize(w,h);
  f.fills=fill?[{type:"SOLID",color:fill}]:[];if(r!==undefined)f.cornerRadius=r;f.x=x;f.y=y;return f;}
function R(p,x,y,w,h,fill,op,r){const n=figma.createRectangle();p.appendChild(n);n.resize(w,h);
  n.fills=[{type:"SOLID",color:fill}];if(op!==undefined)n.opacity=op;if(r!==undefined)n.cornerRadius=r;n.x=x;n.y=y;return n;}
function D(p,x,y,d,fill){const n=figma.createEllipse();p.appendChild(n);n.resize(d,d);
  n.fills=[{type:"SOLID",color:fill}];n.x=x;n.y=y;return n;}
function T(p,style,size,color,chars,x,y,w,o){o=o||{};const t=figma.createText();p.appendChild(t);
  t.fontName={family:o.fam||MA,style};t.fontSize=size;t.characters=chars;t.fills=[{type:"SOLID",color}];
  if(o.lh)t.lineHeight={unit:"PIXELS",value:o.lh};
  if(o.ls!==undefined)t.letterSpacing={unit:"PIXELS",value:o.ls};
  if(o.align)t.textAlignHorizontal=o.align;
  if(w){t.textAutoResize="HEIGHT";t.resize(w,t.height);}
  t.x=x;t.y=y;t.name=o.name||chars.slice(0,20);return t;}
function pill(p,x,y,label,fill,fg){const t=T(p,"Medium",12,fg,label,0,0);
  const w=t.width+22,h=26;const b=F(p,x,y,w,h,fill,13);b.name="pill";b.appendChild(t);t.x=11;t.y=6;return b;}

const s7 = figma.createSlide();
s7.fills=[{type:"SOLID",color:C.paper}];
s7.name="07 Agent chain";
T(s7,"Medium",15,C.muted,"Valen & Partners",120,76,null,{ls:0.6,name:"hdr-brand"});
T(s7,"Medium",15,C.muted,"07 / 11",1580,76,220,{ls:0.6,align:"RIGHT",name:"hdr-num"});
R(s7,120,112,1680,1,C.ink,0.22);
T(s7,"Regular",58,C.ink,"Agents hand work to each other.",120,186,null,{fam:FR,lh:72,ls:-1.2,name:"h-a"});
T(s7,"Regular",58,C.gold,"You keep the veto.",120,258,null,{fam:FR,lh:72,ls:-1.2,name:"h-b"});

const P=F(s7,120,406,1680,522,C.tint,14); P.name="Workflow"; P.clipsContent=true;

// Connector: card3 right, across to the right, down between the rows, back left, down into card4.
const LN=C.light;
R(P,1440,139,120,2,LN,0.75); R(P,1558,139,2,122,LN,0.75);
R(P,120,259,1440,2,LN,0.75); R(P,120,259,2,120,LN,0.75);
R(P,120,377,120,2,LN,0.75);
[600,1020].forEach(function(x){ R(P,x,139,60,2,LN,0.75); D(P,x-4,135,10,C.gold); });
[600,1020].forEach(function(x){ R(P,x,379,60,2,LN,0.75); D(P,x-4,375,10,C.gold); });

const cards=[
 {x:240,y:80,t:"Record created",d:"New company added",p:"Trigger",dark:true},
 {x:660,y:80,t:"Enrichment agent",d:"Researches the company and the right person",p:"Completed"},
 {x:1080,y:80,t:"Lead agent",d:"Scores for ideal customer fit",p:"Completed"},
 {x:240,y:320,t:"If",d:"Matches your ideal customer?",p:"Completed"},
 {x:660,y:320,t:"You approve",d:"Checks the lead before any email goes out",p:"Waiting for you",gold:true},
 {x:1080,y:320,t:"Follow-up agent",d:"Writes and sends the first email",p:"Completed"},
];
cards.forEach(function(c){
  const k=F(P,c.x,c.y,360,120,c.gold?C.goldsoft:C.white,10);
  k.strokes=[{type:"SOLID",color:c.gold?C.gold:C.hair}]; k.strokeWeight=c.gold?1.5:1;
  k.name=c.t;
  k.effects=[{type:"DROP_SHADOW",color:{r:0.10,g:0.09,b:0.08,a:0.06},offset:{x:0,y:4},radius:12,spread:0,visible:true,blendMode:"NORMAL"}];
  R(k,24,26,26,26,c.gold?C.gold:C.tint,1,7);
  T(k,"SemiBold",18,c.gold?C.gold:C.ink,c.t,62,28,270,{ls:-0.3,name:"t"});
  T(k,"Regular",14,C.muted,c.d,24,68,312,{lh:20,name:"d"});
  if(c.dark) pill(P,c.x,c.y-38,c.p,C.ink,C.paper);
  else if(c.gold) pill(P,c.x,c.y-38,c.p,C.gold,C.white);
  else pill(P,c.x,c.y-38,c.p,C.white,C.muted).strokes=[{type:"SOLID",color:C.hair}];
});
T(P,"Medium",13,C.light,"True",530,332,70,{align:"RIGHT",name:"true"});
T(P,"Medium",13,C.light,"False",530,358,70,{align:"RIGHT",name:"false"});

T(s7,"Regular",22,C.muted,"One trigger starts the chain. Add an approval step anywhere you want a look first.",120,956,1680,{lh:34,name:"cap"});
s7.speakerNotes="**2:50 to 3:15**\n\n- This is the architecture answer without a tech-stack slide.\n- Trace it left to right with your finger. One trigger, and each agent hands its work to the next.\n- Land on the gold card: the approval step is a dial, not a switch. Put it wherever the team wants one, or take it out entirely.\n- That is the answer to 'what if it sends something wrong'. Get there before they ask.";

// Insert at position 7 and renumber every header.
const grid = figma.getSlideGrid();
let flat = []; grid.forEach(r => r.forEach(s => flat.push(s)));
flat = flat.filter(s => s.id !== s7.id);
flat.splice(6, 0, s7);
figma.setSlideGrid([flat]);
const renamed = [];
for (let i = 0; i < flat.length; i++) {
  const hn = flat[i].children.find(c => c.name === "hdr-num");
  if (hn) {
    await Promise.all(hn.getStyledTextSegments(["fontName"]).map(s => figma.loadFontAsync(s.fontName)));
    hn.characters = String(i + 1).padStart(2, "0") + " / " + flat.length;
    renamed.push({ pos: i + 1, slide: flat[i].name });
  }
}
return { order: renamed, newSlideId: s7.id };
