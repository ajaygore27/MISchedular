# Enhanced Mock Interview Scheduler

A modern, feature-rich mock interview scheduling system with Firebase backend, Google authentication, and comprehensive admin features.

## 🚀 Features

### 🔐 Authentication & Security
- **Google Sign-in**: Secure authentication using Firebase Auth
- **Admin Role Management**: Role-based access control for administrators
- **Data Validation**: Input validation and error handling

### 📅 Booking System
- **Multi-slot Selection**: Participants can select multiple time slots
- **Real-time Updates**: Live slot count updates
- **Form Validation**: Required field validation and user feedback
- **Responsive Design**: Works on desktop and mobile devices

### 👨‍💼 Admin Dashboard
- **Participant Management**: View, edit, and delete participants
- **Statistics Overview**: Real-time analytics and insights
- **Slot Management**: Lock/unlock time slots
- **User Management**: Admin role assignment

### 📊 Export Features
- **Excel Export**: Clean table format with participant columns
- **CSV Export**: Simple comma-separated format
- **PDF Export**: Professional report format with statistics
- **Flexible Columns**: Customizable participant columns

## 🛠️ Setup Instructions

### 1. Firebase Setup

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one

2. **Enable Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Google sign-in provider
   - Add your domain to authorized domains

3. **Enable Firestore Database**:
   - Go to Firestore Database
   - Create database in test mode (for development)
   - Set up security rules (see below)

4. **Get Configuration**:
   - Go to Project Settings > General
   - Add a web app if not already added
   - Copy the configuration object

5. **Update Configuration**:
   - Open `index.html`
   - Replace the `firebaseConfig` object with your actual configuration

### 2. Security Rules

Copy these rules to Firebase Console > Firestore > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write participants
    match /participants/{document} {
      allow read, write: if request.auth != null;
    }
    
    // Only admins can read admin collection
    match /admins/{document} {
      allow read: if request.auth != null;
      allow write: if false; // Only manually add admins
    }
  }
}
```

### 3. Admin Setup

1. **Add Admin Users**:
   - Go to Firebase Console > Firestore Database
   - Create a collection called "admins"
   - Add documents with email addresses as document IDs
   - Example: Document ID: `admin@example.com`, Fields: `role: "admin"`

2. **Test Admin Access**:
   - Sign in with an admin email
   - Admin tab should be visible
   - Full admin features should be accessible

### 4. Deployment

1. **Local Testing**:
   - Open `index.html` in a web browser
   - Ensure Firebase configuration is correct
   - Test authentication and data persistence

2. **Production Deployment**:
   - Upload to Firebase Hosting or any web server
   - Update Firebase security rules for production
   - Configure custom domain if needed

## 📋 Usage Guide

### For Participants

1. **Sign In**: Click "Sign in with Google" to authenticate
2. **Fill Form**: Enter name, email, and phone number
3. **Select Slots**: Click on desired time slots (multiple selection allowed)
4. **Register**: Click "Register for Slots" to confirm booking
5. **View Status**: Check confirmation message and slot counts

### For Administrators

1. **Access Dashboard**: Sign in with admin account to see admin tab
2. **View Statistics**: Monitor total participants, bookings, and popular slots
3. **Manage Participants**: View all registrations in the table
4. **Export Data**: Use Excel, CSV, or PDF export options
5. **Delete Entries**: Remove participants if needed

## 🔧 Customization

### Time Slots
Edit the `timeSlots` array in the JavaScript to modify available time slots:

```javascript
const timeSlots = [
    { id: '8-9', time: '8 am to 9 am', locked: false },
    { id: '9-10', time: '9 am to 10 am', locked: false },
    // Add more slots as needed
];
```

### Export Columns
Modify the `generateExportData()` function to change export format:

```javascript
const headers = ['Time Slot', 'Count', 'Participant 1', 'Participant 2', 'Participant 3', 'Participant 4', 'Participant 5', 'Participant 6'];
```

### Styling
The application uses modern CSS with:
- Responsive grid layouts
- Gradient backgrounds
- Smooth animations
- Mobile-friendly design

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Not Working**:
   - Check Firebase configuration
   - Ensure Google sign-in is enabled
   - Verify domain is in authorized domains

2. **Data Not Saving**:
   - Check Firestore security rules
   - Verify database is created
   - Check browser console for errors

3. **Admin Tab Not Visible**:
   - Ensure user email is in admins collection
   - Check Firestore permissions
   - Refresh page after admin setup

4. **Export Not Working**:
   - Check if libraries are loaded
   - Ensure participants data exists
   - Try different browser if issues persist

### Debug Mode

Enable debug logging by adding this to the console:

```javascript
localStorage.setItem('debug', 'true');
```

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔒 Security Considerations

- All data is stored securely in Firebase
- Authentication required for all operations
- Admin access is role-based
- Input validation prevents malicious data
- HTTPS required for production deployment

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review Firebase documentation
3. Open an issue in the repository

---

**Happy Scheduling! 🎉**
