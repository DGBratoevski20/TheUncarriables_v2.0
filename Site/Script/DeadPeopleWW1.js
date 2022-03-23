am5.ready(function () {
  var root = am5.Root.new("chartdiv");

  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      endAngle: 270,
    })
  );

  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "country",
      endAngle: 270,
    })
  );

  series.states.create("hidden", {
    endAngle: -90,
  });

  series.data.setAll([
    {
      country: "Russia",
      value: 9.15,
    },
    {
      country: "British Empire",
      value: 3.19,
    },
    {
      country: "France",
      value: 6.16,
    },
    {
      country: "Italy",
      value: 2.197,
    },
    {
      country: "United States",
      value: 0.323,
    },
    {
      country: "Romania",
      value: 0.535,
    },
    {
      country: "Serbia",
      value: 0.331,
    },
    {
      country: "Germany",
      value: 7.142,
    },
    {
      country: "Austria-Hungary",
      value: 7.02,
    },
    {
      country: "Turkey",
      value: 0.975,
    },
    {
      country: "Bulgaria",
      value: 0.266,
    },
  ]);

  series.appear(1000, 100);
});
