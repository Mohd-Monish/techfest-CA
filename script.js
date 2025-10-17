// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// ===================================
// SMOOTH SCROLL WITH OFFSET FOR FIXED HEADER
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// FORM VALIDATION & SUBMISSION
// ===================================

const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Form field elements
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const roleSelect = document.getElementById('role');
const messageTextarea = document.getElementById('message');
const consentCheckbox = document.getElementById('consent');

// Error message elements
const fullnameError = document.getElementById('fullname-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const roleError = document.getElementById('role-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');

// Validation patterns
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^[\d\s\+\-\(\)]{10,}$/;

// ===================================
// VALIDATION FUNCTIONS
// ===================================

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
    input.setAttribute('aria-invalid', 'true');
}

function showSuccess(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove('error');
    input.classList.add('success');
    input.setAttribute('aria-invalid', 'false');
}

function validateFullname() {
    const value = fullnameInput.value.trim();
    
    if (value === '') {
        showError(fullnameInput, fullnameError, 'Please fill out this required field.');
        return false;
    } else if (value.length < 2) {
        showError(fullnameInput, fullnameError, 'Name must be at least 2 characters long.');
        return false;
    } else {
        showSuccess(fullnameInput, fullnameError);
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    
    if (value === '') {
        showError(emailInput, emailError, 'Please fill out this required field.');
        return false;
    } else if (!emailPattern.test(value)) {
        showError(emailInput, emailError, 'Please enter a valid email address (e.g., user@domain.com).');
        return false;
    } else {
        showSuccess(emailInput, emailError);
        return true;
    }
}

function validatePhone() {
    const value = phoneInput.value.trim();
    
    if (value === '') {
        showError(phoneInput, phoneError, 'Please fill out this required field.');
        return false;
    } else if (!phonePattern.test(value)) {
        showError(phoneInput, phoneError, 'Please enter a valid contact number (at least 10 digits).');
        return false;
    } else {
        showSuccess(phoneInput, phoneError);
        return true;
    }
}

function validateRole() {
    const value = roleSelect.value;
    
    if (value === '') {
        showError(roleSelect, roleError, 'Please select an option.');
        return false;
    } else {
        showSuccess(roleSelect, roleError);
        return true;
    }
}

function validateMessage() {
    const value = messageTextarea.value.trim();
    
    if (value === '') {
        showError(messageTextarea, messageError, 'Please fill out this required field.');
        return false;
    } else if (value.length < 10) {
        showError(messageTextarea, messageError, 'Message must be at least 10 characters long.');
        return false;
    } else {
        showSuccess(messageTextarea, messageError);
        return true;
    }
}

function validateConsent() {
    if (!consentCheckbox.checked) {
        consentError.textContent = 'You must agree to receive communications to proceed.';
        consentCheckbox.setAttribute('aria-invalid', 'true');
        return false;
    } else {
        consentError.textContent = '';
        consentCheckbox.setAttribute('aria-invalid', 'false');
        return true;
    }
}

// ===================================
// REAL-TIME VALIDATION (ON BLUR)
// ===================================

fullnameInput.addEventListener('blur', validateFullname);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
roleSelect.addEventListener('blur', validateRole);
messageTextarea.addEventListener('blur', validateMessage);
consentCheckbox.addEventListener('change', validateConsent);

// ===================================
// FORM SUBMISSION
// ===================================

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Hide any previous messages
    formMessage.classList.remove('success', 'error');
    formMessage.style.display = 'none';
    
    // Validate all fields
    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isRoleValid = validateRole();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();
    
    // Check if all validations pass
    if (isFullnameValid && isEmailValid && isPhoneValid && isRoleValid && isMessageValid && isConsentValid) {
        // Disable submit button to prevent double submission
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        // Collect form data
        const formData = {
            fullname: fullnameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            role: roleSelect.value,
            message: messageTextarea.value.trim(),
            consent: consentCheckbox.checked,
            timestamp: new Date().toISOString()
        };
        
        try {
            // Simulate API call to a mocked endpoint
            // In production, replace this with your actual API endpoint
            const response = await mockAPICall(formData);
            
            if (response.success) {
                // Show success message
                formMessage.textContent = 'Thank you! Your query has been successfully submitted. A team member will contact you soon.';
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Remove success classes from inputs
                document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                    input.classList.remove('success', 'error');
                    input.removeAttribute('aria-invalid');
                });
                
                // Scroll to success message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Announce to screen readers
                formMessage.setAttribute('role', 'status');
                formMessage.setAttribute('aria-live', 'polite');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            // Show error message
            formMessage.textContent = 'Submission failed. Please try again later or email us at info@techfest.org.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
            
            // Scroll to error message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Announce to screen readers
            formMessage.setAttribute('role', 'alert');
            formMessage.setAttribute('aria-live', 'assertive');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Query';
        }
    } else {
        // Focus on the first invalid field for accessibility
        const firstInvalidField = form.querySelector('.error');
        if (firstInvalidField) {
            firstInvalidField.focus();
        }
        
        // Show error message
        formMessage.textContent = 'Please fix the errors above before submitting.';
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// ===================================
// MOCK API CALL FUNCTION
// ===================================

function mockAPICall(data) {
    // Simulate network delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Log form data to console (for testing purposes)
            console.log('Form Data Submitted:', data);
            
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve({ success: true, message: 'Form submitted successfully' });
            } else {
                reject({ success: false, message: 'Network error' });
            }
        }, 1500); // 1.5 second delay
    });
}

// ===================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ===================================

const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink?.classList.add('active');
        } else {
            correspondingLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ===================================

// Trap focus within mobile menu when open
document.addEventListener('keydown', (e) => {
    if (navMenu.classList.contains('active') && e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
    }
});

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Techfest IIT Bombay - Landing Page Loaded');
    
    // Set initial ARIA attributes
    navToggle.setAttribute('aria-expanded', 'false');
    
    // Add active class to current section on load
    activateNavLink();
    
    // Announce page loaded to screen readers
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = 'Techfest IIT Bombay website loaded successfully';
    document.body.appendChild(announcement);
});
