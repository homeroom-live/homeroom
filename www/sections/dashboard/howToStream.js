import React from 'react'
import Link from 'next/link'

// Components

import { Container } from 'reactstrap'
import { FlexCol } from '../../components/FlexCol'
import { Text } from '../../components/Text'

// Styles

import { spacing } from '../../utils/spacing'

// HowToStream

export const HowToStream = () => (
  <Container>
    <FlexCol
      css={{ marginTop: spacing.xxxlarge, marginBottom: spacing.xxxlarge }}
    >
      <Text size="xlarge" weight="bold">
        How to Stream
      </Text>

      <Text weight="bold" color="gray">
        Get started with streaming in 5 simple steps
      </Text>

      <Text size="large" weight="bold" css={{ marginTop: spacing.medium }}>
        1. Create a Class
      </Text>
      <Text size="medium">
        Click on <b>New Class</b> at the top of the sidebar on the left. After
        naming and saving your class, you are able to edit the details of your
        Class by clicking the edit icon in the Classes list.
      </Text>

      <Text size="large" weight="bold" css={{ marginTop: spacing.medium }}>
        2. Install OBS
      </Text>
      <Text size="medium">
        To stream video and audio to many people at once, you need to use{' '}
        <b>broadcasting software.</b> For simplicity, let’s use Open Broadcaster
        Software (OBS). <b>OBS is free and runs on Mac, Windows, and Linux.</b>
        <br />
        <br />
        <b>
          <Link href="https://obsproject.com/download">
            <a target="_blank">You can download OBS here.</a>
          </Link>
        </b>
      </Text>

      <Text size="large" weight="bold" css={{ marginTop: spacing.medium }}>
        3. Configure OBS
      </Text>
      <Text size="medium">
        Open OBS. In the bottom left of the OBS window, <b>click Settings</b>.
        Inside Settings, click on Stream, one of the large options on the left.
        <br />
        <br />
        For <b>Stream Type</b>, select <b>Custom Streaming Server</b>. To get
        your <b>URL</b> and <b>Stream key</b>, return to Homeroom. Click on
        Classroom in the sidebar.
        <br />
        <br />
        At the bottom of your Classroom, there&apos;s a Settings section. Copy
        your
        <b>Server Url</b> and <b>Server Key</b> into OBS.
      </Text>

      <Text size="large" weight="bold" css={{ marginTop: spacing.medium }}>
        4. Prepare your Stream
      </Text>
      <Text size="medium">
        Now that OBS is good to go, let’s get your stream set. In the bottom
        left of the OBS window, there is a <b>Sources</b> section. Click the +
        and choose
        <b>Video Capture Device</b> to share your camera. You can add multiple
        Sources to your stream – for example, <b>Window Capture</b> adds your
        computer&apos;s screen.
        <br />
        <br />
        Once you have select a Source for your stream, you should be able to see
        a preview in OBS.{' '}
        <b>Click Start Streaming in the bottom right to go live!</b> If your OBS
        settings are correct, a green square will appear in the bottom right of
        OBS to indicate that your stream is live and connected.
      </Text>

      <Text size="large" weight="bold" css={{ marginTop: spacing.medium }}>
        5. Teach your Class!
      </Text>
      <Text size="medium">
        At last, it is time to return to your Classroom and begin your Class!
        Once you click <b>Start Class</b> your selected Class will be available
        to the public.
      </Text>

      <Text weight="bold" color="gray" css={{ marginTop: spacing.large }}>
        Questions? Comments? Feedback?
        <br />
        <b>
          <Link href="mailto:logan@homeroom.live">
            <a>Get in touch</a>
          </Link>
        </b>
      </Text>
    </FlexCol>
  </Container>
)
