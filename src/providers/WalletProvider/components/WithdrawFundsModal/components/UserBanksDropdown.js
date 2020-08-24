import React, { Fragment, useEffect, useRef, useState } from "react";
import DropdownArrowDownIcon from "shared-components/svgs/DropdownArrowDownIcon";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UserBanksDropdown = ({
  bankAccounts,
  onSelectItem: onSelectItemUserDefined,
  selectedItemId,
}) => {
  const mounted = useRef();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setTimeout(() => {
        if (isDropdownOpen) {
          window.addEventListener("click", closeDropdown);
        } else {
          window.removeEventListener("click", closeDropdown);
        }
      }, 0);
    }
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  });

  const items = bankAccounts.map((bankAccount) => {
    const {
      id: bankId,
      bankName,
      accountName,
      bankAccountNumber,
    } = bankAccount;

    const accountNumberLastFour = `XXXXXX${bankAccountNumber.substr(
      bankAccountNumber.length - 4
    )}`;

    return {
      title: bankName,
      subtitle: `${accountName} - ${accountNumberLastFour}`,
      selectedTitle: `${bankName} - ${accountNumberLastFour}`,
      value: bankId,
    };
  });

  const selectedItem = items.find((bank) => bank.value === selectedItemId);
  const dropdownTitle = selectedItem
    ? selectedItem.selectedTitle
    : "Select Bank";

  const onSelectItem = (item) => {
    onSelectItemUserDefined(item);
    closeDropdown();
  };

  const DropdownItem = ({ item }) => (
    <li className="buddy-dropdown-item" onClick={() => onSelectItem(item)}>
      <p className="dropdown-details">
        <span className="dropdown-item--title text-semi-bold">
          <p className="dropdown-details">
            <p className="dropdown-item--title font-semi-bold mb-2">
              {item.title}
            </p>
            <p className="dropdown-item--title text-sm">{item.subtitle}</p>
          </p>
        </span>
      </p>
    </li>
  );

  return (
    <Fragment>
      <div className="fund-dropdown">
        <div className="select-option" onClick={openDropdown}>
          <div className="buddy-dropdown-title">{dropdownTitle}</div>
          <div className="buddy-dropdown-icon">
            <DropdownArrowDownIcon />
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <ul
          className="buddy-dropdown-list basic-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <Fragment>
            {items.map((item, i) => (
              <Fragment key={i}>
                <DropdownItem item={item} />
              </Fragment>
            ))}
          </Fragment>
        </ul>
      )}
    </Fragment>
  );
};

UserBanksDropdown.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  bankAccounts: state.bankAccounts.data,
});

export default connect(mapStateToProps)(UserBanksDropdown);
