// Copyright 2025, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities. see https://github.com/phetsims/quantum-coin-toss/issues/1
 *
 * @author John
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import optionize from '../../../../phet-core/js/optionize.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import QuantumCoinTossConstants from '../../common/QuantumCoinTossConstants.js';
import quantumCoinToss from '../../quantumCoinToss.js';
import QuantumCoinTossModel from '../model/QuantumCoinTossModel.js';

type SelfOptions = {
 //TODO add options that are specific to QuantumCoinTossScreenView here, see https://github.com/phetsims/quantum-coin-toss/issues/1
};

type QuantumCoinTossScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class QuantumCoinTossScreenView extends ScreenView {

  public constructor( model: QuantumCoinTossModel, providedOptions: QuantumCoinTossScreenViewOptions ) {

    const options = optionize<QuantumCoinTossScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here, see https://github.com/phetsims/quantum-coin-toss/issues/1

      //TODO add default values for optional ScreenViewOptions here, see https://github.com/phetsims/quantum-coin-toss/issues/1
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - QuantumCoinTossConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - QuantumCoinTossConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO, see https://github.com/phetsims/quantum-coin-toss/issues/1
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO, see https://github.com/phetsims/quantum-coin-toss/issues/1
  }
}

quantumCoinToss.register( 'QuantumCoinTossScreenView', QuantumCoinTossScreenView );