// Copyright 2025, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities, see https://github.com/phetsims/quantum-measurement/issues/1
 *
 * @author John
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import QuantumCoinTossColors from '../common/QuantumCoinTossColors.js';
import quantumCoinToss from '../quantumCoinToss.js';
import QuantumCoinTossStrings from '../QuantumCoinTossStrings.js';
import QuantumCoinTossModel from './model/QuantumCoinTossModel.js';
import QuantumCoinTossScreenView from './view/QuantumCoinTossScreenView.js';

type SelfOptions = {
  //TODO add options that are specific to QuantumCoinTossScreen here, see https://github.com/phetsims/quantum-measurement/issues/1
};

type QuantumCoinTossScreenOptions = SelfOptions & ScreenOptions;

export default class QuantumCoinTossScreen extends Screen<QuantumCoinTossModel, QuantumCoinTossScreenView> {

  public constructor( providedOptions: QuantumCoinTossScreenOptions ) {

    const options = optionize<QuantumCoinTossScreenOptions, SelfOptions, ScreenOptions>()( {
      name: QuantumCoinTossStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here, see https://github.com/phetsims/quantum-measurement/issues/1

      //TODO add default values for optional ScreenOptions here, see https://github.com/phetsims/quantum-measurement/issues/1
      backgroundColorProperty: QuantumCoinTossColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new QuantumCoinTossModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new QuantumCoinTossScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

quantumCoinToss.register( 'QuantumCoinTossScreen', QuantumCoinTossScreen );