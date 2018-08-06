import { css } from 'styled-components';

export default css`
  .dropup,
  .dropright,
  .dropdown,
  .dropleft {
    position: relative;
  }

  .dropdown-toggle {
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: '';
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
    &:empty::after {
      margin-left: 0;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }

  .dropdown-menu-right {
    right: 0;
    left: auto;
  }

  .dropup {
    .dropdown-menu {
      top: auto;
      bottom: 100%;
      margin-top: 0;
      margin-bottom: 0.125rem;
    }
    .dropdown-toggle {
      &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0;
        border-right: 0.3em solid transparent;
        border-bottom: 0.3em solid;
        border-left: 0.3em solid transparent;
      }
      &:empty::after {
        margin-left: 0;
      }
    }
  }

  .dropright {
    .dropdown-menu {
      top: 0;
      right: auto;
      left: 100%;
      margin-top: 0;
      margin-left: 0.125rem;
    }
    .dropdown-toggle {
      &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid transparent;
        border-right: 0;
        border-bottom: 0.3em solid transparent;
        border-left: 0.3em solid;
      }
      &:empty::after {
        margin-left: 0;
      }
      &::after {
        vertical-align: 0;
      }
    }
  }

  .dropleft {
    .dropdown-menu {
      top: 0;
      right: 100%;
      left: auto;
      margin-top: 0;
      margin-right: 0.125rem;
    }
    .dropdown-toggle {
      &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        display: none;
      }
      &::before {
        display: inline-block;
        width: 0;
        height: 0;
        margin-right: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid transparent;
        border-right: 0.3em solid;
        border-bottom: 0.3em solid transparent;
      }
      &:empty::after {
        margin-left: 0;
      }
      &::before {
        vertical-align: 0;
      }
    }
  }

  .dropdown-menu {
    &[x-placement^='top'],
    &[x-placement^='right'],
    &[x-placement^='bottom'],
    &[x-placement^='left'] {
      right: auto;
      bottom: auto;
    }
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    &:hover,
    &:focus {
      color: #16181b;
      text-decoration: none;
      background-color: #f8f9fa;
    }
    &.active,
    &:active {
      color: #fff;
      text-decoration: none;
      background-color: #007bff;
    }
    &.disabled,
    &:disabled {
      color: #6c757d;
      background-color: transparent;
    }
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #6c757d;
    white-space: nowrap;
  }

  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1.5rem;
    color: #212529;
  }
`;
