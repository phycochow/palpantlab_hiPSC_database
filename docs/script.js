$(document).ready(function() {
    $('#myTable').DataTable({
        ajax: {
            url: 'data.json',
            dataSrc: 'data'
        },
        columns: [
            { data: 'name' },
            { data: 'age' },
            { data: 'city' }
        ]
    });
});