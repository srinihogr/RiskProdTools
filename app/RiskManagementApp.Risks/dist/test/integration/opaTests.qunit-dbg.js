sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagementApp/Risks/test/integration/FirstJourney',
		'RiskManagementApp/Risks/test/integration/pages/RisksList',
		'RiskManagementApp/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagementApp/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);