import express from 'express';
import Contact from '../models/Contact.js';


const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, phone, specialization, message } = req.body;

  // Validate inputs
  if (!name || !email || !phone || !specialization || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Save to MongoDB only
    const newContact = new Contact({ name, email, phone, specialization, message });
    await newContact.save();
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
