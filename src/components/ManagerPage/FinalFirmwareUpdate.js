// @flow

import React, { PureComponent } from 'react'
import { translate } from 'react-i18next'
import type { Device, T } from 'types/common'

// import runJob from 'renderer/runJob'

import Box, { Card } from 'components/base/Box'
// import Button from 'components/base/Button'

type DeviceInfos = {
  targetId: number,
  version: string,
}

type Props = {
  t: T,
  device: Device,
  infos: DeviceInfos,
}

type State = {
  // latestFirmware: ?FirmwareInfos,
}

class FirmwareUpdate extends PureComponent<Props, State> {
  state = {
    // latestFirmware: null,
  }

  componentDidMount() {}

  componentWillUnmount() {
    this._unmounting = true
  }

  _unmounting = false

  // handleInstallFinalFirmware = async () => {
  //   try {
  //     const { latestFirmware } = this.state
  //     this.setState(state => ({ ...state, installing: true }))
  //     const {
  //       device: { path: devicePath },
  //     } = this.props
  //     await runJob({
  //       channel: 'manager',
  //       job: 'installFinalFirmware',
  //       successResponse: 'device.finalFirmwareInstallSuccess',
  //       errorResponse: 'device.finalFirmwareInstallError',
  //       data: {
  //         devicePath,
  //         firmware: latestFirmware,
  //       },
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  render() {
    const { t, ...props } = this.props

    return (
      <Box flow={4} {...props}>
        <Box color="dark" ff="Museo Sans" fontSize={6}>
          {t('manager:firmwareUpdate')}
        </Box>
        <Card flow={2} {...props}>
          <Box horizontal align="center" flow={2} />
        </Card>
      </Box>
    )
  }
}

export default translate()(FirmwareUpdate)
