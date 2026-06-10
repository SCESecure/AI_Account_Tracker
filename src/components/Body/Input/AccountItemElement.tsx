import type { AccountType } from "./Accounts";

export default function AccountItemElement({
  key,
  account,
}: {
  key: string;
  account: AccountType;
}) {
  return (
    <>
      <h5>Hello, AccountItemElement Component!</h5>
      <div>
        <strong>은행명</strong>
        <p>{account.bank}</p>
      </div>
      {account.accountName.length > 0 && (
        <div>
          <strong>계좌명</strong>
          <p>{account.accountName}</p>
        </div>
      )}
      <div>
        <strong>계좌번호</strong>
        <p>{account.accountNumber}</p>
      </div>
      <div>
        <strong>초기 금액(예산)</strong>
        <p>{account.budget}원</p>
      </div>
    </>
  );
}
