$('#setupForm').submit(function(e) {
    e.preventDefault();
  
    const payload = {
      floors: $('#floors').val(),
      terrace: $('#terrace').is(':checked'),
      parking: $('#parking').is(':checked')
    };
  
    Swal.fire({
      title: '🛠️ Setting things up...',
      text: 'Building your virtual elevator... Please wait!',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  
    axios.post('/setup', payload)
      .then(response => {
        Swal.close();
        window.location.href = "/dashboard";
      })
      .catch(error => {
        Swal.fire('Oops!', 'Something went wrong. Try again.', 'error');
      });
  });
  