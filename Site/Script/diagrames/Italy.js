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
      value: 33400
    }, {
      year: "1910",
      value: 36100
    }, {
        year: "1920",
        value: 37100
    }, {
        year: "1930",
        value: 40300
    }, {
        year: "1940",
        value: 43800
    }, {
        year: "1950",
        value: 46600
    }, {
        year: "1960",
        value: 49700
    }, {
        year: "1970",
        value: 53500
    }, {
      year: "1980",
      value: 56300
    }, {
      year: "1990",
      value: 57000
    }, {
      year: "2000",
      value: 56700
    }, {
      year: "2010",
      value: 59300
    }, {
      year: "2020",
      value: 60500
    }];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    series.appear(1000);
    chart.appear(1000, 1000);
    
    });