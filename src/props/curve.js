/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import PropTypes from 'prop-types'
import {
    curveBasis,
    curveBasisClosed,
    curveBasisOpen,
    curveBundle,
    curveCardinal,
    curveCardinalClosed,
    curveCardinalOpen,
    curveCatmullRom,
    curveCatmullRomClosed,
    curveCatmullRomOpen,
    curveLinear,
    curveLinearClosed,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape'

export const curvePropMapping = {
    basis: curveBasis,
    basisClosed: curveBasisClosed,
    basisOpen: curveBasisOpen,
    bundle: curveBundle,
    cardinal: curveCardinal,
    cardinalClosed: curveCardinalClosed,
    cardinalOpen: curveCardinalOpen,
    catmullRom: curveCatmullRom,
    catmullRomClosed: curveCatmullRomClosed,
    catmullRomOpen: curveCatmullRomOpen,
    linear: curveLinear,
    linearClosed: curveLinearClosed,
    monotoneX: curveMonotoneX,
    monotoneY: curveMonotoneY,
    natural: curveNatural,
    step: curveStep,
    stepAfter: curveStepAfter,
    stepBefore: curveStepBefore,
}

export const curvePropKeys = Object.keys(curvePropMapping)

export const curvePropType = PropTypes.oneOf(curvePropKeys)

export const closedCurvePropKeys = curvePropKeys.filter(c => c.endsWith('Closed'))

export const closedCurvePropType = PropTypes.oneOf(closedCurvePropKeys)