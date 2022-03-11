am5.ready(function() {

  var root = am5.Root.new("chartdiv");
  
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  }));
  
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);
  
  
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15
  });
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "year",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {})
  }));
  
  
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "year",
    tooltip: am5.Tooltip.new(root, {
      labelText:"{valueY} thousands"
    })
  }));
  
  series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
  series.columns.template.adapters.add("fill", function(fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  series.columns.template.adapters.add("stroke", function(stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  
  var data = [{
      year: "1900",
      value: 2570
    }, {
      year: "1910",
      value: 2890
    }, {
        year: "1920",
        value: 3240
    }, {
        year: "1930",
        value: 3550
    }, {
        year: "1940",
        value: 3850
    }, {
        year: "1950",
        value: 4268.28
    }, {
        year: "1960",
        value: 4581.1
    }, {
        year: "1970",
        value: 4931.24
    }, {
      year: "1980",
      value: 5123.95
    }, {
      year: "1990",
      value: 5141.12
    }, {
      year: "2000",
      value: 5341.19 
    }, {
      year: "2010",
      value: 5554.85
    }, {
      year: "2020",
      value: 5792.2
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    series.appear(1000);
    chart.appear(1000, 1000);
    
    });