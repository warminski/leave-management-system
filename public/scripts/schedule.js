$(function(){
    var dp = new DayPilot.Scheduler("dp");

    // behavior and appearance
    dp.cellWidth = 40;
    dp.eventHeight = 30;
    dp.headerHeight = 25;

    // view
    dp.startDate = new DayPilot.Date("2013-05-01").firstDayOfMonth();  // or just dp.startDate = "2013-03-25";
    dp.days = dp.startDate.daysInMonth();
    dp.scale = "Day";
    dp.timeHeaders = [
        { groupBy: "Month" },
        { groupBy: "Day", format: "d" }
    ];

    dp.init();var dp = new DayPilot.Scheduler("dp");
})