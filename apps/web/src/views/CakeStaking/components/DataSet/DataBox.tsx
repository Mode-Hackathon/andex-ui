import { AutoRow, Flex, FlexGap, Text } from "@pancakeswap/uikit";
import styled from "styled-components";

export const DataBox = styled(AutoRow)`
  width: 100%;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.default};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DataRow: React.FC<{
  label?: React.ReactNode;
  value?: React.ReactNode;
}> = ({ label, value }) => {
  return (
    <Flex justifyContent="space-between" width="100%" alignItems="center">
      <Text fontSize={12} bold color="textSubtle" textTransform="uppercase">
        {label}
      </Text>
      <Text fontSize={16} textAlign="right">
        {value}
      </Text>
    </Flex>
  );
};

export const DataHeader: React.FC<{
  value?: string;
}> = ({ value }) => {
  return (
    <DataRow
      label={
        <FlexGap gap="4px">
          <img
            src="/images/cake-staking/token-vecake.png"
            alt="token-vecake"
            width="24px"
          />
          <Text fontSize="14px" bold>
            veANDX
          </Text>
        </FlexGap>
      }
      value={
        <Text fontSize="14px" bold>
          {value}
        </Text>
      }
    />
  );
};
