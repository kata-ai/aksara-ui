import { css } from 'styled-components';

export default css`
  &.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #0062cc;
        border-color: #005cbf;
      }
    }
  }

  &.show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
  }

  &.btn-primary:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }

  &.show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  &.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    &:hover {
      color: #fff;
      background-color: #5a6268;
      border-color: #545b62;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #545b62;
        border-color: #4e555b;
      }
    }
  }

  &.show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
  }

  &.btn-secondary:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
  }

  &.show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }

  &.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    &:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #1e7e34;
        border-color: #1c7430;
      }
    }
  }

  &.show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
  }

  &.btn-success:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
  }

  &.show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }

  &.btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    &:hover {
      color: #fff;
      background-color: #138496;
      border-color: #117a8b;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #117a8b;
        border-color: #10707f;
      }
    }
  }

  &.show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #117a8b;
    border-color: #10707f;
  }

  &.btn-info:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
  }

  &.show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
  }

  &.btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
    &:hover {
      color: #212529;
      background-color: #e0a800;
      border-color: #d39e00;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #212529;
        background-color: #d39e00;
        border-color: #c69500;
      }
    }
  }

  &.show > .btn-warning.dropdown-toggle {
    color: #212529;
    background-color: #d39e00;
    border-color: #c69500;
  }

  &.btn-warning:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
  }

  &.show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  &.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    &:hover {
      color: #fff;
      background-color: #c82333;
      border-color: #bd2130;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #bd2130;
        border-color: #b21f2d;
      }
    }
  }

  &.show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #bd2130;
    border-color: #b21f2d;
  }

  &.btn-danger:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
  }

  &.show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }

  &.btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    &:hover {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #212529;
        background-color: #dae0e5;
        border-color: #d3d9df;
      }
    }
  }

  &.show > .btn-light.dropdown-toggle {
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
  }

  &.btn-light:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
  }

  &.show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  &.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    &:hover {
      color: #fff;
      background-color: #23272b;
      border-color: #1d2124;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #1d2124;
        border-color: #171a1d;
      }
    }
  }

  &.show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
  }

  &.btn-dark:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
  }

  &.show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }

  &.btn-outline-primary {
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #007bff;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
    }
  }

  &.show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  &.btn-outline-primary:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }

  &.show > .btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  &.btn-outline-secondary {
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
    &:hover {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #6c757d;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      }
    }
  }

  &.show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  &.btn-outline-secondary:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
  }

  &.show > .btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }

  &.btn-outline-success {
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;
    &:hover {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #28a745;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
      }
    }
  }

  &.show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }

  &.btn-outline-success:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
  }

  &.show > .btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }

  &.btn-outline-info {
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;
    &:hover {
      color: #fff;
      background-color: #17a2b8;
      border-color: #17a2b8;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #17a2b8;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
      }
    }
  }

  &.show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
  }

  &.btn-outline-info:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
  }

  &.show > .btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
  }

  &.btn-outline-warning {
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;
    &:hover {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #ffc107;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
      }
    }
  }

  &.show > .btn-outline-warning.dropdown-toggle {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
  }

  &.btn-outline-warning:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
  }

  &.show > .btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  &.btn-outline-danger {
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;
    &:hover {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #dc3545;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
      }
    }
  }

  &.show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  &.btn-outline-danger:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
  }

  &.show > .btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }

  &.btn-outline-light {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
    &:hover {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #f8f9fa;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
      }
    }
  }

  &.show > .btn-outline-light.dropdown-toggle {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }

  &.btn-outline-light:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
  }

  &.show > .btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  &.btn-outline-dark {
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;
    &:hover {
      color: #fff;
      background-color: #343a40;
      border-color: #343a40;
    }
    &:focus,
    &.focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
    &.disabled,
    &:disabled {
      color: #343a40;
      background-color: transparent;
    }
    &:not(:disabled):not(.disabled) {
      &:active,
      &.active {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
      }
    }
  }

  &.show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
  }

  &.btn-outline-dark:not(:disabled):not(.disabled) {
    &:active:focus,
    &.active:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
  }

  &.show > .btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }

  &.btn-link {
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
      background-color: transparent;
      border-color: transparent;
    }
    &:focus,
    &.focus {
      text-decoration: underline;
      border-color: transparent;
      box-shadow: none;
    }
    &:disabled,
    &.disabled {
      color: #6c757d;
      pointer-events: none;
    }
  }

  &.btn-lg,
  &.btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  &.btn-sm,
  &.btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  &.btn-block {
    display: block;
    width: 100%;
    + .btn-block {
      margin-top: 0.5rem;
    }
  }

  input {
    &[type='submit'].btn-block,
    &[type='reset'].btn-block,
    &[type='button'].btn-block {
      width: 100%;
    }
  }
`;
