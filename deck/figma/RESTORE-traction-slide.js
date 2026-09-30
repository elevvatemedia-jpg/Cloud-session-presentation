// Traction slide, deleted on request. Kept so it can be restored or folded
// into another slide. Run via the Figma MCP use_figma tool against
// fileKey nZCVLnHAeYLKMJNc6748ay.
//
// It was the only place in the deck carrying: five companies testing, four
// months since the first commit, the Dale Carnegie Poland pilot, and the
// "testing, not yet paying" honesty line.

const C = {
  paper:{r:0.98039,g:0.98039,b:0.97647}, ink:{r:0.10588,g:0.09412,b:0.07843},
  muted:{r:0.41961,g:0.40000,b:0.36863}, light:{r:0.65882,g:0.63922,b:0.60000},
  gold:{r:0.78431,g:0.66275,b:0.43137},
};
const FR="Fraunces", MA="Manrope";
await Promise.all(["Regular","Medium"].map(s=>figma.loadFontAsync({family:MA,style:s}))
  .concat([figma.loadFontAsync({family:FR,style:"Regular"})]));
function R(p,x,y,w,h,fill,op){const n=figma.createRectangle();p.appendChild(n);n.resize(w,h);
  n.fills=[{type:"SOLID",color:fill}];if(op!==undefined)n.opacity=op;n.x=x;n.y=y;return n;}
function T(p,style,size,color,chars,x,y,w,o){o=o||{};const t=figma.createText();p.appendChild(t);
  t.fontName={family:o.fam||MA,style};t.fontSize=size;t.characters=chars;t.fills=[{type:"SOLID",color}];
  if(o.lh)t.lineHeight={unit:"PIXELS",value:o.lh};
  if(o.ls!==undefined)t.letterSpacing={unit:"PIXELS",value:o.ls};
  if(o.align)t.textAlignHorizontal=o.align;
  if(w){t.textAutoResize="HEIGHT";t.resize(w,t.height);}
  t.x=x;t.y=y;t.name=o.name||chars.slice(0,20);return t;}

const s = figma.createSlide();
s.fills=[{type:"SOLID",color:C.paper}];
s.name="Traction";
T(s,"Medium",15,C.muted,"Valen & Partners",120,76,null,{ls:0.6,name:"hdr-brand"});
T(s,"Medium",15,C.muted,"10 / 13",1580,76,220,{ls:0.6,align:"RIGHT",name:"hdr-num"});
R(s,120,112,1680,1,C.ink,0.22);
T(s,"Regular",52,C.ink,"Early, and already validated.",120,220,null,{fam:FR,lh:66,ls:-1,name:"h"});
T(s,"Regular",280,C.ink,"5",120,392,null,{fam:FR,lh:280,ls:-8,name:"stat-a"});
T(s,"Regular",24,C.muted,"companies testing ValenOS today",120,716,600,{lh:36,name:"cap-a"});
R(s,960,392,1,360,C.ink,0.18);
T(s,"Regular",280,C.gold,"4",1040,392,null,{fam:FR,lh:280,ls:-8,name:"stat-b"});
T(s,"Regular",24,C.muted,"months since the first commit, June 2026",1040,716,700,{lh:36,name:"cap-b"});
T(s,"Regular",34,C.ink,"Pilot running with Dale Carnegie Poland.",120,832,null,{fam:FR,lh:46,ls:-0.7,name:"pilot"});
T(s,"Regular",22,C.light,"Testing, not yet paying. No revenue to report.",120,910,900,{lh:34,name:"honesty"});

s.speakerNotes = "- Lead with the honest framing. It buys credibility for everything else in the deck.\n- Five companies are testing. None are paying yet. Say that out loud before they ask.\n- Dale Carnegie Poland is the proof point. A training company with a real sales motion chose to run a pilot on a four-month-old product.\n- The 4 is the one to emphasise: all of this exists four months after the first commit.";

return { restoredSlideId: s.id };
