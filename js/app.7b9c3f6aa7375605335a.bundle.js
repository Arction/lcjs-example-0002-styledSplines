(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const r=a(89),s=a(863),{lightningChart:o,AxisTickStrategies:i,AxisScrollStrategies:n,PointShape:l,SolidFill:d,ColorHEX:m,Themes:c}=r,{createProgressiveRandomGenerator:S}=s,p=new Date,g=p.getTime(),h=o().ChartXY({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});h.setTitle("Live power consumption").getDefaultAxisX().setTickStrategy(i.DateTime,(e=>e.setDateOrigin(p))).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-61e3,stopAxisAfter:!1}))).setScrollStrategy(n.progressive),h.getDefaultAxisY().setTitle("Power consumption (kW)").setInterval({start:0,end:500,stopAxisAfter:!1}).setScrollStrategy(n.expansion);const u=h.addSplineSeries({pointShape:l.Circle}).setName("Power consumption").setCursorInterpolationEnabled(!1).setCursorResultTableFormatter(((e,t,a,r)=>e.addRow(t.getName()).addRow(t.axisX.formatValue(a)).addRow(t.axisY.formatValue(r)+" kW")));S().setNumberOfPoints(1e4).generate().setStreamBatchSize(1).setStreamInterval(1e3).setStreamRepeat(!0).toStream().forEach((e=>{e.x=Date.now()-g,e.y=2e3*e.y,u.add(e)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);