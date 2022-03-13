am5.ready(function() {

  var root = am5.Root.new("chartdiv");
  
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      endAngle: 270
    })
  );
  
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "country",
      endAngle: 270
    })
  );
  
  series.states.create("hidden", {
    endAngle: -90
  });
  
  series.data.setAll([{
    country: "British Commonwealth",
    value: 0.466
  }, {
    country: "United Kingdom",
    value: 0.357
  }, {
    country: "Hungary",
    value: 0.490
  }, {
    country: "Romania",
    value: 0.500
  }, {
    country: "France",
    value: 0.563
  }, {
    country: "Poland",
    value: 5.800
  }, {
    country: "U.S.S.R",
    value: 18.000
  }, {
    country: "Yugoslavia",
    value: 1.505
  }, {
	country: "Germany",
	value: 4.200
  }, {
    country: "Japan",
    value: 1.972
  }]);
  
  series.appear(1000, 100);
  
  }); 