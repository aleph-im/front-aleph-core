import React, { useState, useMemo } from "react";
import { StyledTabsHeader, StyledTabsItem } from "./styles";
import { TabsProps } from "./types";
import TextGradient from "../TextGradient";

const noop = () => null

const Tabs = ({
  tabs,
  defaultSelected = 0,
  onTabChange = noop
}: TabsProps) => {
  const safeDefault = defaultSelected < tabs.length ? defaultSelected : 0
  const [selected, setSelected] = useState<number>(safeDefault)
  const handleClick = (i: number) => {
    onTabChange(selected, i)
    setSelected(i)
  }

  return (
    <>
      <StyledTabsHeader>
        {tabs.map((tab, i) =>
          i === selected ? (
            <StyledTabsItem isSelected>
              <TextGradient color="main0" type="body">
                {tab.name}
              </TextGradient>
            </StyledTabsItem>
          ) : (
            <StyledTabsItem onClick={() => handleClick(i)}>
              {tab.name}
            </StyledTabsItem>
          ),
        )}
      </StyledTabsHeader>
      {tabs[selected].component}
    </>
  )
}

export default Tabs;