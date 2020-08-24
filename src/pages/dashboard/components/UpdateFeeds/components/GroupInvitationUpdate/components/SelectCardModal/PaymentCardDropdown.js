import React, {Fragment, useEffect, useRef, useState} from "react";
import DropdownArrowDownIcon from "shared-components/svgs/DropdownArrowDownIcon";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PaymentCardDropdown = ({
  cards,
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

  const items = cards.map((card) => ({
      label: card.bank,
      value: card.id,
  }));

  const selectedItem = items.find((item) => item.value === selectedItemId);
  const dropdownTitle = selectedItem ? selectedItem.label : "Select Option";

  const onSelectItem = (item) => {
    onSelectItemUserDefined(item);
    closeDropdown();
  };

  const DropdownItem = ({ item }) => (
    <li className="buddy-dropdown-item" onClick={() => onSelectItem(item)}>
      <p className="dropdown-details">
        <span className="dropdown-item--title text-semi-bold">
          {item.label}
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

PaymentCardDropdown.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.cards.data,
});

export default connect(mapStateToProps)(PaymentCardDropdown);
