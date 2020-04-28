const EMPLOYMENT_TYPE = [
    {
        label: 'Đi làm hưởng lương',
        value: 1
    },
    {
        label: 'Chủ doanh nghiệp',
        value: 2
    },
    {
        label: 'Hộ kinh doanh có giấy phép',
        value: 3
    },
    {
        label: 'Hộ kinh doanh không có giấy phép',
        value: 4
    },
    {
        label: 'Lao động tự do',
        value: 5
    },
    {
        label: 'Thất nghiệp',
        value: 6
    },
    {
        label: 'Đã nghỉ hưu',
        value: 7
    }
]

const RELATIONSHIP = [
    {
        label: 'Vợ/Chồng',
        value: 1
    },
    {
        label: 'Cha/Mẹ',
        value: 2
    },
    {
        label: 'Con',
        value: 3
    },
    {
        label: 'Anh/Chị/Em ruột',
        value: 4
    },
    {
        label: 'Họ hàng',
        value: 5
    }
]

const IDGENDER = [
    {
        label: 'Nam',
        value: 'm'
    },
    {
        label: 'Nữ',
        value: 'f'
    }
]

const COMPANY_TYPE = [
    {
        label: 'Công ty TNHH',
        value: 1
    },
    {
        label: 'Công ty Cổ phần',
        value: 2
    },
    {
        label: 'Công ty Nước ngoài / Liên doanh',
        value: 3
    },
    {
        label: 'Công ty nhà nước',
        value: 4
    },
    {
        label: 'Doanh nghiệp tư nhân',
        value: 5
    },
    {
        label: 'Khác',
        value: 6
    }
]

const LOAN_PURPOSE = [
    {
        label: 'Chăm sóc sắc đẹp, chữa bệnh, tổ chức đám cưới',
        value: 1
    },
    {
        label: 'Du lịch, học tập',
        value: 2
    },
    {
        label: 'Mua đồ nội thất, vật dụng gia đình',
        value: 4
    },
    {
        label: 'Mua xe cộ, điện thoại, điện tử, điện máy',
        value: 5
    },
    {
        label: 'Sửa chữa, trang trí nhà cửa',
        value: 6
    },
    {
        label: 'Tiêu dùng cá nhân khác',
        value: 7
    }
]

const EDUCATION_LEVEL = [
    {
        label: 'Tiểu học',
        value: 1
    },
    {
        label: 'Trung học cơ sở',
        value: 2
    },
    {
        label: 'Trung học phổ thông',
        value: 3
    },
    {
        label: 'Trung cấp',
        value: 4
    },
    {
        label: 'Cao đẳng',
        value: 5
    },
    {
        label: 'Đại học',
        value: 6
    },
    {
        label: 'Trên đại học',
        value: 7
    }
]

const MARTIAL_STATUS = [
    {
        label: 'Đã kết hôn',
        value: 1
    },
    {
        label: 'Độc thân',
        value: 2
    },
    {
        label: 'Goá',
        value: 3
    },
    {
        label: 'Ly hôn',
        value: 4
    },
    {
        label: 'Ly thân',
        value: 5
    }
]

const RESIDENCE_TYPE = [
    {
        label: 'Nhà sở hữu riêng',
        value: 1
    },
    {
        label: 'Nhà của cơ quan/công ty',
        value: 2
    },
    {
        label: 'Thuê phòng trọ',
        value: 3
    },
    {
        label: 'Thuê nhà nguyên căn',
        value: 4
    },
    {
        label: 'Thuê căn hộ chung cư',
        value: 5
    },
    {
        label: 'Ở cùng cha mẹ',
        value: 6
    },
    {
        label: 'Ở cùng người thân/họ hàng/bạn bè',
        value: 7
    },
    {
        label: 'Khác',
        value: 8
    }
]

const LABOUR_CONTRACT_TYPE = [
    {
        label: 'Hợp đồng trên 01 năm',
        value: 1
    },
    {
        label: 'Hợp đồng dưới 01 năm',
        value: 2
    },
    {
        label: 'Không xác định thời hạn',
        value: 3
    },
    {
        label: 'Biên chế',
        value: 4
    },
    {
        label: 'Cộng tác viên',
        value: 5
    },
    {
        label: 'Thời vụ',
        value: 6
    },
    {
        label: 'Thử việc',
        value: 7
    }
]

const EMPLOYMENT_INDUSTRY_TYPE = [
    {
        label: 'An ninh - Bảo vệ',
        value: 1
    },
    {
        label: 'Báo chí - Truyền hình',
        value: 2
    },
    {
        label: 'Bảo hiểm',
        value: 3
    },
    {
        label: 'Bưu chính',
        value: 4
    },
    {
        label: 'Chứng khoán - Vàng',
        value: 5
    },
    {
        label: 'Cơ khí - Chế tạo',
        value: 6
    },
    {
        label: 'Công nghệ cao',
        value: 7
    },
    {
        label: 'Công nghệ thông tin',
        value: 8
    },
    {
        label: 'Dầu khí - Hoá chất',
        value: 9
    },
    {
        label: 'Dệt may - Da giày',
        value: 10
    },
    {
        label: 'Dịch thuật - Phiên dịch',
        value: 11
    },
    {
        label: 'Dịch vụ',
        value: 12
    },
    {
        label: 'Điện - Điện tử - Điện lạnh',
        value: 13
    },
    {
        label: 'Điện tử - Viễn thông',
        value: 14
    },
    {
        label: 'Du lịch',
        value: 15
    },
    {
        label: 'Game',
        value: 16
    },
    {
        label: 'Giáo dục - Đào tạo',
        value: 17
    },
    {
        label: 'Hàng gia dụng',
        value: 18
    },
    {
        label: 'Hàng hải - Hàng không',
        value: 19
    },
    {
        label: 'Hành chính văn phòng',
        value: 20
    },
    {
        label: 'Hoá học - Sinh học',
        value: 21
    },
    {
        label: 'Hoạch định - Dự án',
        value: 22
    },
    {
        label: 'In ấn - Xuất bản',
        value: 23
    },
    {
        label: 'Kế toán/Kiểm toán',
        value: 24
    },
    {
        label: 'Khách sạn - Nhà hàng',
        value: 25
    },
    {
        label: 'Kho vận - Vật tư',
        value: 26
    },
    {
        label: 'Kiến trúc - Xây dựng',
        value: 27
    },
    {
        label: 'Kinh doanh bất động sản',
        value: 28
    },
    {
        label: 'Kỹ thuật',
        value: 29
    },
    {
        label: 'Marketing-PR',
        value: 30
    },
    {
        label: 'Nghệ thuật - Nhiếp ảnh',
        value: 31
    },
    {
        label: 'Ngoại thương - Xuất nhập khẩu',
        value: 32
    },
    {
        label: 'Nhân viên kinh doanh',
        value: 33
    },
    {
        label: 'Nông - Lâm - Ngư nghiệp',
        value: 34
    },
    {
        label: 'Ô tô - Xe máy',
        value: 35
    },
    {
        label: 'Pháp lý - Luật',
        value: 36
    },
    {
        label: 'Spa - Mỹ phẩm - Trang sức',
        value: 37
    },
    {
        label: 'Tài chính - Ngân hàng',
        value: 38
    },
    {
        label: 'Thiết kế đồ hoạ',
        value: 39
    },
    {
        label: 'Thời trang',
        value: 40
    },
    {
        label: 'Thủ công mỹ nghệ',
        value: 41
    },
    {
        label: 'Thực phẩm - Đồ uống',
        value: 42
    },
    {
        label: 'Thương mại điện tử',
        value: 43
    },
    {
        label: 'Tiếp thị - Quảng cáo - Tổ chức sự kiện',
        value: 44
    },
    {
        label: 'Truyền hình - Truyền thông - Báo chí',
        value: 45
    },
    {
        label: 'Vận tải',
        value: 46
    },
    {
        label: 'Viễn thông',
        value: 47
    },
    {
        label: 'Xây dựng',
        value: 48
    },
    {
        label: 'Y tế - Dược',
        value: 49
    },
    {
        label: 'Khách sạn - Nhà hàng',
        value: 50
    }
]

const OCCUPATION = [
    {
        label: 'Trường phòng/Quản lý/Trưởng nhóm',
        value: 1
    },
    {
        label: 'Bác sỹ/Y tá/Dược sỹ',
        value: 2
    },
    {
        label: 'Bán hàng tự do (không có địa điểm cố định)',
        value: 3
    },
    {
        label: 'Bảo vệ',
        value: 4
    },
    {
        label: 'Cán bộ/Công chức/Viên chức nhà nước',
        value: 5
    },
    {
        label: 'Công an/Quân đội',
        value: 6
    },
    {
        label: 'Công nhân',
        value: 7
    },
    {
        label: 'Đại lý bảo hiểm',
        value: 8
    },
    {
        label: 'Đầu bếp',
        value: 9
    },
    {
        label: 'Giáo viên/Giảng viên',
        value: 10
    },
    {
        label: 'Hưu trí',
        value: 11
    },
    {
        label: 'Kinh doanh cầm đồ',
        value: 12
    },
    {
        label: 'Kỹ sư/Kiến trúc sư',
        value: 13
    },
    {
        label: 'Lao động phổ thông',
        value: 14
    },
    {
        label: 'Lĩnh vực tôn giáo/tín ngưỡng',
        value: 15
    },
    {
        label: 'Luật sư/Thư ký toà/Thẩm phán/Chánh án hoặc các công việc liên quan đến tư pháp',
        value: 16
    },
    {
        label: 'Nghề thủ công (cắt tóc, thợ may, thợ điện, thợ nước, thợ xây...)',
        value: 17
    },
    {
        label: 'Ngư dân',
        value: 18
    },
    {
        label: 'Người sống bằng lợi tức (tiền cho thuê cố định, lãi suất tiền gửi...)',
        value: 19
    },
    {
        label: 'Nhân viên kinh doanh',
        value: 20
    },
    {
        label: 'Nhân viên thu hồi nợ các tổ chức tín dụng',
        value: 21
    },
    {
        label: 'Nhân viên văn phòng',
        value: 22
    },
    {
        label: 'Nội trợ',
        value: 23
    },
    {
        label: 'Nông dân',
        value: 24
    },
    {
        label: 'Phóng viên/Nhà báo',
        value: 25
    },
    {
        label: 'Tài xế/Xe ôm',
        value: 26
    },
    {
        label: 'Tạp vụ/Giúp việc nhà',
        value: 27
    },
    {
        label: 'Thất nghiệp',
        value: 28
    },
    {
        label: 'Tiểu thương (buôn bán có địa điểm cố định)',
        value: 29
    },
    {
        label: 'Tự kinh doanh dịch vụ vận tải',
        value: 30
    },
    {
        label: 'Vận động viên',
        value: 31
    },
    {
        label: 'Văn nghệ sỹ',
        value: 32
    },
    {
        label: 'Khác',
        value: 33
    }
]

const ID_TYPE = [
    {
        label: 'Mới',
        value: 'n'
    },
    {
        label: 'Cũ',
        value: 'o'
    }
]

const DL_TYPE = [
    {
        label: 'Mới',
        value: 'n'
    },
    {
        label: 'Cũ',
        value: 'o'
    }
]

const TITLE = [
    {
        label: 'Ông',
        value: "1"
    },
    {
        label: 'Bà',
        value: "2"
    }
]

const DISBURSEMENT_CHANNEL = [
    {
        label: 'Nhận tiền mặt',
        value: 1
    },
    {
        label: 'Chuyển khoản',
        value: 2
    }
]

export const OCB_ENUM = {
    EMPLOYMENT_TYPE,
    RELATIONSHIP,
    IDGENDER,
    COMPANY_TYPE,
    LOAN_PURPOSE,
    EDUCATION_LEVEL,
    MARTIAL_STATUS,
    RESIDENCE_TYPE,
    LABOUR_CONTRACT_TYPE,
    EMPLOYMENT_INDUSTRY_TYPE,
    OCCUPATION,
    ID_TYPE,
    DL_TYPE,
    TITLE,
    DISBURSEMENT_CHANNEL
}