sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'testpad/test/integration/pages/MainListReport' ,
        'testpad/test/integration/pages/MainObjectPage',
        'testpad/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('testpad') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);