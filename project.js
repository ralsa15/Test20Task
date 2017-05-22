define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1495477880783,
	"serverVersion": 1495477880783,
	"components": [
		{
			"Title": "Task",
			"ContentTypeId": "0x0108008926E89902049049A4E17E3FD9F02708",
			"Require": {
				"name": "viewmodel",
				"proto": false,
				"path": "viewmodel"
			},
			"Markup": {
				"tag": "component-viewmodel"
			},
			"Params": {}
		}
	],
	"columns": {
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Task Name\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" Sealed=\"TRUE\" ColName=\"nvarchar1\" />",
		"Attachments": "<Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\" />",
		"Priority": "<Field ID=\"{a8eb573e-9e11-481a-a8c9-1104a54b2fbd}\" Type=\"Choice\" Name=\"Priority\" DisplayName=\"Priority\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Priority\" ColName=\"nvarchar3\"><CHOICES><CHOICE>(1) High</CHOICE><CHOICE>(2) Normal</CHOICE><CHOICE>(3) Low</CHOICE></CHOICES><MAPPINGS><MAPPING Value=\"1\">(1) High</MAPPING><MAPPING Value=\"2\">(2) Normal</MAPPING><MAPPING Value=\"3\">(3) Low</MAPPING></MAPPINGS><Default>(2) Normal</Default></Field>",
		"Status": "<Field Type=\"Choice\" ID=\"{c15b34c3-ce7d-490a-b133-3f4de8801b76}\" Name=\"Status\" DisplayName=\"Task Status\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Status\" ColName=\"nvarchar4\"><CHOICES><CHOICE>Not Started</CHOICE><CHOICE>In Progress</CHOICE><CHOICE>Completed</CHOICE><CHOICE>Deferred</CHOICE><CHOICE>Waiting on someone else</CHOICE></CHOICES><MAPPINGS><MAPPING Value=\"1\">Not Started</MAPPING><MAPPING Value=\"2\">In Progress</MAPPING><MAPPING Value=\"3\">Completed</MAPPING><MAPPING Value=\"4\">Deferred</MAPPING><MAPPING Value=\"5\">Waiting on someone else</MAPPING></MAPPINGS><Default>Not Started</Default></Field>",
		"PercentComplete": "<Field Type=\"Number\" Name=\"PercentComplete\" ID=\"{d2311440-1ed6-46ea-b46d-daa643dc3886}\" Percentage=\"TRUE\" Min=\"0\" Max=\"1\" DisplayName=\"% Complete\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"PercentComplete\" ColName=\"float1\"><Default>0</Default></Field>",
		"AssignedTo": "<Field ID=\"{53101f38-dd2e-458c-b245-0c236cc13d1a}\" Type=\"UserMulti\" List=\"UserInfo\" Name=\"AssignedTo\" Mult=\"TRUE\" Sortable=\"FALSE\" ShowField=\"ImnName\" DisplayName=\"Assigned To\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"AssignedTo\" ColName=\"int2\" />",
		"Body": "<Field ID=\"{7662cd2c-f069-4dba-9e35-082cf976e170}\" Type=\"Note\" RichText=\"TRUE\" RestrictedMode=\"TRUE\" RichTextMode=\"FullHtml\" Name=\"Body\" DisplayName=\"Description\" Sortable=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Body\" ColName=\"ntext2\" />",
		"StartDate": "<Field ID=\"{64cd368d-2f95-4bfc-a1f9-8d4324ecb007}\" Type=\"DateTime\" Name=\"StartDate\" DisplayName=\"Start Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"StartDate\" ColName=\"datetime1\" />",
		"DueDate": "<Field Type=\"DateTime\" ID=\"{cd21b4c2-6841-4f9e-a23a-738a65f99889}\" Name=\"DueDate\" DisplayName=\"Due Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"DueDate\" ColName=\"datetime2\" />"
	}
}
);});