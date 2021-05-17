import React from 'react';
import { Button } from 'reactstrap';
import FA from 'react-fontawesome';
import * as Feather from 'react-feather';
import './style.scss';

export default function SidebarToggleButton({ isSidebarCollapsed, toggleSidebar }) {
  const chevronClassName = isSidebarCollapsed ? 'is-collapsed' : 'is-not-collapsed';
  const screenReaderLabel = isSidebarCollapsed ? 'Expand Sidebar Navigation' : 'Collapse Sidebar Navigation';
  return (
    // <div style={{ ...(isSidebarCollapsed ? { backgroundColor: 'red' } : { backgroundColor: 'blue' }) }}>
    <Button color="success" onClick={toggleSidebar} style={{ border: '0', outline: 'none' }}
      className={`m-r sidebar-toggle ${chevronClassName} ${isSidebarCollapsed ? 'red' : 'blue'}`} aria-label={screenReaderLabel}>
      <FA name={'chevron-left'} />
      {isSidebarCollapsed ? <Feather.AlignJustify /> : <Feather.AlignCenter />}
    </Button>
    // </div>

  );
}
