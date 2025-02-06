export const userSchema = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) => Rule.required().email().error('A valid email is required'),
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        hidden: true, // Hide in Sanity Studio as passwords shouldn't be visible
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: (Rule: any) => Rule.required().error('First name is required'),
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
        validation: (Rule: any) => Rule.required().error('Last name is required'),
      },
      {
        name: 'dateOfBirth',
        title: 'Date of Birth',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
        },
        validation: (Rule: any) => Rule.required().error('Date of birth is required'),
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
        validation: (Rule: any) => Rule.required().error('Country is required'),
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string',
        options: {
          list: [
            { title: 'Male', value: 'Male' },
            { title: 'Female', value: 'Female' },
          ],
        },
        validation: (Rule: any) => Rule.required().error('Gender is required'),
      },
      {
        name: 'subscribe',
        title: 'Subscribed to Emails',
        type: 'boolean',
        description: 'User has opted in for email updates.',
      },
    ],
  };
  