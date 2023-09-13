import { GridColDef } from '@mui/x-data-grid';
import { MailBox } from '../domain/entity/MailBox';

interface IMailBoxTable {
	id: string;
	mailBoxDisplayName: string;
	mailBoxEmail: string;
}

export class MailBoxMapper {
	public static mapToTableDataStructureValue({ id, mailBoxDisplayName, mailBoxEmail }: IMailBoxTable): object {
		return { id, mailBoxDisplayName, mailBoxEmail };
	}

	public static createTableDataStructureValue(mailBox: MailBox[]): object[] {
		let rows: object[] = [];
		mailBox.map((_mailbox) => {
			const mappedMailBox = this.mapToTableDataStructureValue({
				id: _mailbox.mailBoxNIUEmail,
				mailBoxDisplayName: _mailbox.mailBoxDisplayName,
				mailBoxEmail: _mailbox.mailBoxEmail
			});

			rows = rows.concat(mappedMailBox);
		});

		return rows;
	}

	public createTableDataStructureHeader(): GridColDef[] {
		const columns: GridColDef[] = [
			{ field: 'id', headerName: 'Id', width: 200 },
			{ field: 'mailBoxDisplayName', headerName: 'tables.columns.name', width: 200 },
			{ field: 'mailBoxEmail', headerName: 'tables.columns.email', width: 500 }
		];
		return columns;
	}
}
