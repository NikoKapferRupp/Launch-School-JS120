function createInvoice(services) {
  let internet = 5500;
  let phone = 3000;
  if (services) {
    if (Object.hasOwn(services, 'internet')) {
      internet = services.internet;
    }

    if (Object.hasOwn(services, 'phone')) {
      phone = services.phone;
    }    
  }

  return {
    internet: internet,
    phone: phone,

    total() {
      return this.internet + this.phone;
    }
  }
}

function createPayment(services) {
  if (services.amount) {
    
  }

  


  return {
    
    
    total() {

    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000