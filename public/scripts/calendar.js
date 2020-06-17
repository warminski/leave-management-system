$(function(){

    $('#my_calendar_en').rescalendar({
        id: 'my_calendar_en',
        format: 'YYYY-MM-DD',
        refDate: '2019-03-08',
        jumpSize: 15,
        disabledDays: ['2019-01-01', '2019-01-07', '2019-04-18', '2019-04-19', '2019-05-01', '2019-05-02', '2019-05-13', '2019-08-15', '2019-10-12', '2019-11-01', '2019-12-06', '2019-12-09', '2019-12-20', '2019-12-24', '2019-12-25', '2019-12-31'],
        disabledWeekDays: [5,6],
        data: [
            {
                id: 1,
                name: 'item1',
                startDate: '2019-03-01',
                endDate: '2019-03-03',
                customClass: 'greenClass'
            },
            {
                id: 2,
                name: 'item2',
                startDate: '2019-03-05',
                endDate: '2019-03-15',
                customClass: 'blueClass',
                title: 'Title 2 en'
            },
            {
                id: 3,
                name: 'item5',
                startDate: '2019-03-05',
                endDate: '2019-03-08',
                customClass: 'greenClass'
            }
        ],

        dataKeyField: 'name',
        dataKeyValues: ['item1', 'item2', 'item3','item4','item5']

    });
});