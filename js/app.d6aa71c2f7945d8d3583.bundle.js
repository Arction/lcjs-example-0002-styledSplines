(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(377),r=a(613),{lightningChart:i,AxisTickStrategies:n,AxisScrollStrategies:o,PointShape:l,SolidFill:c,ColorHEX:d,Themes:m}=s,{createProgressiveRandomGenerator:g}=r,h=new Date,p=h.getTime(),S=i({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:m[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});S.setTitle("Live power consumption").getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(h))).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-61e3,stopAxisAfter:!1}))).setScrollStrategy(o.progressive),S.axisY.setTitle("Power consumption").setUnits("kW").setInterval({start:0,end:500,stopAxisAfter:!1}).setScrollStrategy(o.expansion);const u=S.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setCurvePreprocessing({type:"spline"}).setName("Power consumption");g().setNumberOfPoints(1e4).generate().setStreamBatchSize(1).setStreamInterval(1e3).setStreamRepeat(!0).toStream().forEach((e=>{e.x=Date.now()-p,e.y=2e3*e.y,u.add(e)}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);