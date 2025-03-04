// Copyright 2025, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities. see https://github.com/phetsims/quantum-measurement/issues/1
 *
 * @author John
 */

import TModel from '../../../../joist/js/TModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import quantumCoinToss from '../../quantumCoinToss.js';

type SelfOptions = {
  //TODO add options that are specific to QuantumCoinTossModel here, see https://github.com/phetsims/quantum-measurement/issues/1
};

type QuantumCoinTossModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class QuantumCoinTossModel implements TModel {

  public constructor( providedOptions: QuantumCoinTossModelOptions ) {
    //TODO, see https://github.com/phetsims/quantum-measurement/issues/1
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO, see https://github.com/phetsims/quantum-measurement/issues/1
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO, see https://github.com/phetsims/quantum-measurement/issues/1
  }
}

quantumCoinToss.register( 'QuantumCoinTossModel', QuantumCoinTossModel );