import { Box } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import CliInstallation from "../../components/code/CliInstallation";

import FollowCursor from "../../content/Animations/FollowCursor/FollowCursor";
import { followCursor } from '../../constants/code/Animations/followCursorCode';

const FollowCursorDemo = () => {
  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} overflow="hidden">
          <FollowCursor />
        </Box>

        <p className="demo-extra-info">
          <InfoOutlineIcon position="relative" /> Hover for desktop, drag for mobile.
        </p>

        <Dependencies dependencyList={['@react-spring/web', 'react-use-gesture']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={followCursor} />
      </CodeTab>

      <CliTab>
        <CliInstallation cliDefault={followCursor.cliDefault} />
      </CliTab>
    </TabbedLayout>

  );
}

export default FollowCursorDemo;