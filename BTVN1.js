// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// 1. Dọn dẹp khoảng trắng 2 đầu chuỗi
const cleanAppointmentCode = rawAppointmentCode.trim();

// 2. Chuẩn hóa mã phiếu mượn/hẹn sang chữ in hoa
const normalizedCode = cleanAppointmentCode.toUpperCase(); // "MED-NHI-1024"

// 3. Kiểm tra tiền tố hợp lệ sau khi đã chuẩn hóa in hoa
const isCodeValid = normalizedCode.startsWith("MED-");

// 4. Cắt chuỗi lấy Mã chuyên khoa và Số thứ tự tiếp đón
// Chuỗi: "MED-NHI-1024" (hoặc "med-nhi-1024")
// Index 0..2: "med", Index 3: "-", Index 4..6: "nhi", Index 7: "-", Index 8..11: "1024"
const departmentCode = cleanAppointmentCode.slice(4, 7); // Lấy "nhi" từ index 4 đến 6

// Cắt lấy 4 chữ số thứ tự (index 8 đến 12 để bao gồm index 11)
const appointmentNumber = cleanAppointmentCode.slice(8, 12); // Lấy "1024"

// 5. Định dạng tên bệnh nhân (Loại bỏ khoảng trắng dư thừa và chuyển sang chữ in hoa)
const formattedPatientName = cleanPatientName.trim().toUpperCase();

// 6. Hiển thị kết quả ra Console
console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode.toUpperCase());
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);