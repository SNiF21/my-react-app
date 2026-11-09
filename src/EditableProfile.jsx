import { useState } from 'react'

const initialProfile = {
  name: '',
  email: '',
  preferences: {
    theme: 'light',
  },
}

function EditableProfile() {
  const [profile, setProfile] = useState(initialProfile)

  const updateProfile = (field, value) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }))
  }

  const updateTheme = (theme) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      preferences: {
        ...currentProfile.preferences,
        theme,
      },
    }))
  }

  return (
    <section className="exercise">
      <h2>Exercise 2: Editable profile</h2>
      <form className="profile-form">
        <label>
          Name
          <input
            type="text"
            value={profile.name}
            onChange={(event) => updateProfile('name', event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={profile.email}
            onChange={(event) => updateProfile('email', event.target.value)}
          />
        </label>
        <label>
          Theme
          <select
            value={profile.preferences.theme}
            onChange={(event) => updateTheme(event.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <button type="button" onClick={() => setProfile(initialProfile)}>
          Restore initial profile
        </button>
      </form>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </section>
  )
}

export default EditableProfile
