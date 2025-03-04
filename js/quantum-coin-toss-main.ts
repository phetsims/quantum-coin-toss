// Copyright 2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author John
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import QuantumCoinTossScreen from './quantum-coin-toss/QuantumCoinTossScreen.js';
import QuantumCoinTossStrings from './QuantumCoinTossStrings.js';
import './common/QuantumCoinTossQueryParameters.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = QuantumCoinTossStrings[ 'quantum-coin-toss' ].titleStringProperty;

  const screens = [
    new QuantumCoinTossScreen( { tandem: Tandem.ROOT.createTandem( 'quantumCoinTossScreen' ) } )
  ];

  const options: SimOptions = {

    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode, see https://github.com/phetsims/quantum-measurement/issues/1
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );