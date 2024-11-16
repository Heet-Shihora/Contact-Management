"use client"

import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Paper } from '@mui/material'
import ContactForm from './ContactForm'
import ContactTable from './ContactTable'

export default function ContactManagement() {
  const [contacts, setContacts] = useState([])
  const [editingContact, setEditingContact] = useState(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts')
      const data = await response.json()
      setContacts(data)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    }
  }

  const handleAddContact = async (newContact) => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact),
      })
      const data = await response.json()
      setContacts([...contacts, data])
    } catch (error) {
      console.error('Error adding contact:', error)
    }
  }

  const handleUpdateContact = async (updatedContact) => {
    console.log(updatedContact);
    
    try {
      const response = await fetch(`http://localhost:5000/api/contacts/${updatedContact._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContact),
      })
      const data = await response.json()
      setContacts(contacts.map(c => c._id === data._id ? data : c))
      setEditingContact(null)
    } catch (error) {
      console.error('Error updating contact:', error)
    }
  }

  const handleDeleteContact = async (id) => {
    console.log(id);
    
    try {
      await fetch(`http://localhost:5000/api/contacts/${id}`, { method: 'DELETE' })
      setContacts(contacts.filter(c => c._id !== id))
    } catch (error) {
      console.error('Error deleting contact:', error)
    }
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Contact Management
      </Typography>
      <Box my={4}>
        <Paper elevation={3}>
          <Box p={3}>
            <ContactForm
              onSubmit={editingContact ? handleUpdateContact : handleAddContact}
              initialData={editingContact}
            />
          </Box>
        </Paper>
      </Box>
      <ContactTable
        contacts={contacts}
        onEdit={setEditingContact}
        onDelete={handleDeleteContact}
      />
    </Container>
  )
}