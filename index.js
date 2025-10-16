const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const executionLogs = [];

// Same batch endpoints as above...
app.post('/batch/payroll-accumulation', (req, res) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    job: 'Payroll Accumulation',
    timestamp: timestamp,
    status: 'SUCCESS',
    message: '✅ Payroll batch job executed!',
    details: 'Calculated salaries for 150 staff members'
  };
  
  executionLogs.push(logEntry);
  console.log(`[${timestamp}] ${logEntry.job}: ${logEntry.message}`);
  
  res.status(200).json(logEntry);
});

app.post('/batch/invoice-generation', (req, res) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    job: 'Invoice Generation',
    timestamp: timestamp,
    status: 'SUCCESS',
    message: '✅ Invoice generation completed!',
    details: 'Generated 87 invoices'
  };
  
  executionLogs.push(logEntry);
  console.log(`[${timestamp}] ${logEntry.job}: ${logEntry.message}`);
  
  res.status(200).json(logEntry);
});

app.post('/batch/payment-disbursement', (req, res) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    job: 'Payment Disbursement',
    timestamp: timestamp,
    status: 'SUCCESS',
    message: '✅ Payments disbursed!',
    details: 'Processed ₹2,45,000 to 95 staff'
  };
  
  executionLogs.push(logEntry);
  console.log(`[${timestamp}] ${logEntry.job}: ${logEntry.message}`);
  
  res.status(200).json(logEntry);
});

app.post('/batch/document-expiration', (req, res) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    job: 'Document Expiration Check',
    timestamp: timestamp,
    status: 'SUCCESS',
    message: '✅ Document check completed!',
    details: 'Found 12 expiring documents'
  };
  
  executionLogs.push(logEntry);
  console.log(`[${timestamp}] ${logEntry.job}: ${logEntry.message}`);
  
  res.status(200).json(logEntry);
});

app.get('/', (req, res) => {
  res.json({
    status: 'Server Running',
    totalExecutions: executionLogs.length,
    recentLogs: executionLogs.slice(-10)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
