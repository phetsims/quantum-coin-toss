// Copyright 2025, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author John
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import quantumCoinToss from '../quantumCoinToss.js';

const QuantumCoinTossQueryParameters = QueryStringMachine.getAll( {
  //TODO add schemas for query parameters, see https://github.com/phetsims/quantum-measurement/issues/1
} );

quantumCoinToss.register( 'QuantumCoinTossQueryParameters', QuantumCoinTossQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.quantumCoinToss.QuantumCoinTossQueryParameters' );

export default QuantumCoinTossQueryParameters;