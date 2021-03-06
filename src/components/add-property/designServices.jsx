import React from "react";
import { renderInput, propertyTypes } from "../../utility/common";

import StateDist from "../common/stateDist";
import {
  pFormRows,
  Ptype,
  textFields,
  otherCheckBox,
  pFor,
  Utype
} from "./designData";
export const getPropertyType = pId => {
  const fRes = propertyTypes.find(item => {
    return item.id === pId;
  });
  if (fRes) return fRes.type;
  return null;
};

export const getProperyFields = type => {
  if (
    type === "corporate" ||
    type === "commercial" ||
    type === "residential" ||
    type === "pg"
  ) {
    return [
      pFormRows.typeRow2,
      pFormRows.typeRow3,
      pFormRows.typeRow1,
      pFormRows.textFieldsRow1,
      pFormRows.checkBoxRow1
    ];
  } else if (type === "hotel" || type === "restaurant") {
    return [
      pFormRows.typeRow2,
      pFormRows.typeRow3,
      pFormRows.textFieldsRow1,
      pFormRows.checkBoxRow1
    ];
  }
};

export const getFormRow = (type, pField) => {
  if (pField === pFormRows.typeRow1) {
    return typeRow1(type, pField);
  }
  if (pField === pFormRows.typeRow2) {
    return typeRow2(type, pField);
  }
  if (pField === pFormRows.typeRow3) {
    return typeRow3(type, pField);
  }
  if (pField === pFormRows.textFieldsRow1) {
    return textFieldsRow1(type, pField);
  }
  if (pField === pFormRows.checkBoxRow1) {
    return checkBoxRow1(type, pField);
  }
  return null;
};
export const getFormData = (data, type) => {
  const formData = new FormData(data);
  formData.append("Property", type);
  return formData;
  /*let checkboxfields = otherCheckBox(type);
  checkboxfields.forEach(item => {
    returnData[item.id] = [];
  });
  for (let pair of formData.entries()) {
    let checkBoxId = checkForCheckBox(pair, checkboxfields);
    if (checkBoxId) {
      returnData[checkBoxId][pair[0]] = pair[1];
    }
  }
  checkboxfields.forEach(item => {
    console.log("Ret dat");
    formData.append(item.id, returnData[item.id].join(","));
  });*/
};
/******************************** Private Methods **************************/
/*const checkForCheckBox = (pair, checkboxfields) => {
  let checkBox = checkboxfields.find(cItem => {
    let ischeckBox = cItem.checkBoxes.find(item => {
      return item.name === pair[0];
    });
    if (ischeckBox) return true;
    return false;
  });
  if (checkBox) return checkBox.id;
  return null;
};*/
const typeRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {Ptype(type).map(item => {
        return (
          <div className="mb-3 custom-radio custom-control mr-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
};
const typeRow2 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {pFor(type).map(item => {
        return (
          <div className="mb-3 custom-radio custom-control mr-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
};
const typeRow3 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {Utype(type).map(item => {
        return (
          <div className="mb-3 custom-radio custom-control mr-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
};
const textFieldsRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {textFields(type).map(item => {
        if (item.custom && item.custom === "stateDist")
          return <StateDist key={item.custom} />;
        return (
          <div className="col-md-4 mb-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
};
const checkBoxRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {otherCheckBox(type).map(item => {
        return (
          <React.Fragment key={item.label}>
            <label style={{ fontWeight: "bolder", width: "100%" }}>
              {item.label}
            </label>
            {item.checkBoxes.map(item => {
              return (
                <div
                  className="mb-3 custom-checkbox custom-control mr-3"
                  key={item.id}
                >
                  {renderInput(item)}
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
