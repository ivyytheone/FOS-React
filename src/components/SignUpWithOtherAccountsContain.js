import { memo, useMemo } from "react";

const SignUpWithOtherAccountsContain = memo(
  ({
    accountButtonText,
    accountButtonIcon,
    accountIconUrl,
    accountIconUrl2,
    accountButtonImageUrl,
    accountText,
    signInButtonText,
    propTextAlign,
    propAlignSelf,
  }) => {
    const alreadyHaveAnContainerStyle = useMemo(() => {
      return {
        textAlign: propTextAlign,
        alignSelf: propAlignSelf,
      };
    }, [propTextAlign, propAlignSelf]);

    return (
      <div className="flex flex-col items-center justify-center gap-[16px] text-left text-base text-d42-text-color-1 font-h6-16px-regular-inter">
        <div className="relative leading-[175%]">{accountButtonText}</div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[24px]">
          <img
            className="relative rounded-45xl w-6 h-6 object-cover"
            alt=""
            src={accountButtonIcon}
          />
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src={accountIconUrl}
          />
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src={accountIconUrl2}
          />
          <img
            className="relative w-6 h-6 object-cover"
            alt=""
            src={accountButtonImageUrl}
          />
        </div>
        <div
          className="relative leading-[175%]"
          style={alreadyHaveAnContainerStyle}
        >
          <span>{accountText}</span>
          <span className="text-a57e8-primary">{signInButtonText}</span>
        </div>
      </div>
    );
  }
);

export default SignUpWithOtherAccountsContain;
