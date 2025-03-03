// Copyright 2025, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author John
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import quantumCoinToss from '../quantumCoinToss.js';

const SCHEMA_MAP = {
  //TODO add schemas for query parameters
};

const QuantumCoinTossQueryParameters = QueryStringMachine.getAll( SCHEMA_MAP );

// The schema map is a read-only part of the public API, in case schema details (e.g. validValues) are needed elsewhere.
QuantumCoinTossQueryParameters.SCHEMA_MAP = SCHEMA_MAP;

quantumCoinToss.register( 'QuantumCoinTossQueryParameters', QuantumCoinTossQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.quantumCoinToss.QuantumCoinTossQueryParameters' );

export default QuantumCoinTossQueryParameters;