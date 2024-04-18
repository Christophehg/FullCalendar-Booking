document.addEventListener("DOMContentLoaded", function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, { 
        slotLabelFormat: [ //Format TimeLine
            { weekday: 'short' },
            { day: '2-digit', month: 'short' }, 
        ],
        nowIndicator: true, //Affiche le temps actuel
        resourceAreaWidth: 200, //Largeur Resources
        locale: 'fr', //Langue française
        headerToolbar: { //Bouton header
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineWeek,resourceTimelineMonth,listMonth"
        },
        buttonText: { //Traduction des textes
            today: 'Aujourd\'hui',
            resourceTimelineWeek: 'Semaine',
            month: 'Mois',
            list: 'Liste',
        },
        initialView: 'resourceTimelineWeek', //Page par defaut
        views: { //Reccurence de 15jours
            resourceTimelineWeek: {
                type: 'resourceTimelineWeek',
                duration: { days: 15 }
            }
        },

        slotDuration: { hours: 24 }, //Jour en 24heures
        editable: true, //Drag & Drop
        selectable: true, //Jour clicable
        showNonCurrentDates: true,
        resourceGroupField: 'building', //Catégorie
        resources: [
            { id: '1', building: 'Appartement Paris', title: 'Appartement Paris', eventTextColor: "black"},
            { id: '1stay', building: 'Appartement Paris', title: 'Quantité', eventTextColor: "black", eventColor: 'grey', eventBackgroundColor: "#E0E0E0", },
            { id: '1rates', building: 'Appartement Paris', title: 'Tarifs', eventTextColor: "black", eventColor: 'grey', eventBackgroundColor: "#E0E0E0", },
            { id: '2', building: 'Appartement Gueliz', title: 'Appartement Gueliz', eventTextColor: "black" },
            { id: '2stay', building: 'Appartement Gueliz', title: 'Quantité', eventTextColor: "black", eventColor: 'grey', eventBackgroundColor: "#E0E0E0", },
            { id: '2rates', building: 'Appartement Gueliz', title: 'Tarifs', eventTextColor: "black", eventColor: 'grey ', eventBackgroundColor: "#E0E0E0", },
        ],
        events: [
            //Appartement 1
            {
                title: "Customer Booking",
                start: new Date(y, m, d+2, 11),
                end: new Date(y, m, d+3, 16),
                borderColor: '#003580', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#8DBCFE',
                resourceId: 1,
                slotEventOverlap: false
            },
            {
                title: "Cust Airbnb",
                start: new Date(y, m, d+4, 15),
                end: new Date(y, m, d+10, 8),
                borderColor: '#FF5A5F', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#FEC0C2',
                resourceId: 1,
                slotEventOverlap: false
            },
            {
                title: "Cust Airbnb",
                start: new Date(y, m, d+11, 15),
                end: new Date(y, m, d+20, 11),
                borderColor: '#FF5A5F',
                allDay: false,
                backgroundColor: '#FEC0C2',
                resourceId: 1,
                slotEventOverlap: false
            },

            //Appartement 1 | Tarifs
            {
                title: "63",
                start: new Date(y, m, d+1, 0),
                end: new Date(y, m, d+2, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },
            {
                title: "63",
                start: new Date(y, m, d+2, 0),
                end: new Date(y, m, d+3, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },
            {
                title: "63",
                start: new Date(y, m, d+3, 0),
                end: new Date(y, m, d+4, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },
            {
                title: "63",
                start: new Date(y, m, d+4, 0),
                end: new Date(y, m, d+5, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },
            {
                title: "63",
                start: new Date(y, m, d+5, 0),
                end: new Date(y, m, d+6, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },
            {
                title: "63",
                start: new Date(y, m, d+6, 0),
                end: new Date(y, m, d+7, 0),
                allDay: false,
                resourceId: "1rates",
                slotEventOverlap: false
            },


            //Appartement 1 | Quantité
            {
                title: "1",
                start: new Date(y, m, d+2, 0),
                end: new Date(y, m, d+3, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+3, 0),
                end: new Date(y, m, d+4, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+4, 0),
                end: new Date(y, m, d+5, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+5, 0),
                end: new Date(y, m, d+6, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+6, 0),
                end: new Date(y, m, d+7, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+7, 0),
                end: new Date(y, m, d+8, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+8, 0),
                end: new Date(y, m, d+9, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+9, 0),
                end: new Date(y, m, d+10, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            {
                title: "1",
                start: new Date(y, m, d+10, 0),
                end: new Date(y, m, d+11, 0),
                allDay: false,
                resourceId: "1stay",
                slotEventOverlap: false
            },
            
            //Appartement 2
            {
                title: "Cust Airbnb",
                start: new Date(y, m, d-2, 15),
                end: new Date(y, m, d+2, 11),
                borderColor: '#FF5A5F',
                allDay: false,
                backgroundColor: '#FEC0C2',
                resourceId: 2,
                slotEventOverlap: false
            },
            {
                title: "Customer Booking",
                start: new Date(y, m, d+2, 13),
                end: new Date(y, m, d+4, 11),
                borderColor: '#003580',
                allDay: false,
                backgroundColor: '#8DBCFE',
                resourceId: 2,
                slotEventOverlap: false
            },
            {
                title: "Customer Booking",
                start: new Date(y, m, d+4, 15),
                end: new Date(y, m, d+10, 10),
                borderColor: '#003580',
                allDay: false,
                backgroundColor: '#8DBCFE',
                resourceId: 2,
                slotEventOverlap: false
            },
        ],
        eventContent: function(arg) { //Centrer le texte des évènements
        return {
            html: '<div class="fc-content">' +
                    '<div class="fc-title" style="text-align: center;">' + arg.event.title + '</div>' +
                  '</div>'
        };
    },
        
        eventClassNames: 'custom-event-class', //Largeur des events

        eventClick: function(info) { //Click sur l'event
            alert('Event: ' + info.event.title);
        },
    });

    calendar.render();

    // Associer la fonction au clic du bouton
    document.getElementById('toggleResourceWidth').addEventListener('click', function() {
        // Modification de la largeur de resources
        if (calendar.getOption('resourceAreaWidth') === 0) {
            calendar.setOption('resourceAreaWidth', 200); // Rétablir la largeur par défaut
            document.getElementById('toggleResourceWidth').innerText = "Masquer les ressources";
        } else {
            calendar.setOption('resourceAreaWidth', 0); // Réduire la largeur à 0
            document.getElementById('toggleResourceWidth').innerText = "Afficher les ressources";
        }
    });
});