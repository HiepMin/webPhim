import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-phim-sap-chieu',
    templateUrl: './phim-sap-chieu.component.html',
    styleUrls: ['./../../../assets/scss/layout/_danhSachPhim.scss']
})
export class PhimSapChieuComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }



    public DSPhimSapChieu: Array<any> = [
        {
            name: "Biệt Đội Cún Cưng",
            director: "Raja Gosnell",
            trailer: "https://www.youtube.com/embed/qJTuvua2I_U",
            date: "08.06.2018",
            IMDB: 2.9,
            image: "https://s3img.vcdn.vn/mobile/123phim/2018/05/biet-doi-cun-cung-show-dogs-15274747310384_220x310.jpg",
            description: "Max – một chú chó cảnh sát và cộng sự là con người đang điều tra về một nhóm tội phạm. Chúng lợi dụng 1 chương trình về chó để thực hiện phi vụ phi pháp của minh. Liệu Max và các cộng sự có phá được vụ án khó nhằn này? Liệu chuyện gì sẽ xảy ra?",
        },
        {
            name: "Jurassic World",
            director: "J.A. Bayona",
            trailer: "https://youtu.be/whixKrf1M_k",
            date: "08.06.2018",
            IMDB: 8,
            image: "https://s3img.vcdn.vn/mobile/123phim/2018/06/the-gioi-khung-long-vuong-quoc-sup-do-jurassic-world-fallen-kingdom-c13-15283376537341_220x310.jpg",
            description: "Tất cả những yếu tố kỳ diệu, phiêu lưu, hồi hộp cùng với một trong những thương hiệu nổi tiếng và thành công nhất lịch sự điện ảnh, sự kiện này là một bước chuyển mình về hình ảnh cho thấy sự trở lại của các nhân vật được yêu thích và các loài khủng long đầy cảm hứng và đáng sợ hơn bao giờ hết. Chào mừng đến với Thế Giới Khủng Long: Vương Quốc Sụp Đổ",
        },
        {
            name: "Giành Anh Từ Biển - Adrift",
            director: "Baltasar Kormákur",
            trailer: "https://youtu.be/whixKrf1M_k",
            date: "08.06.2018",
            IMDB: 6.7,
            image: "https://s3img.vcdn.vn/123phim/2018/05/gianh-anh-tu-bien-adrift-2018-15274847136517.jpg",
            description: "Một câu chuyện có thật về sóng gió tình yêu của chàng trai Richard Sharp và cô gái Tami Oldham. Những tưởng sau màn cầu hôn lãng mạn, họ sẽ có những phút giây bình yên bên nhau, cùng du ngoạn biển; nhưng những gì họ phải đối mặt là cơn bão lịch sử lớn nhất Thái Bình Dương, và 41 ngày lênh đênh trên biển sau đó.",
        },
        {
            name: "Gia Đình Siêu Nhân 2 - Incredibles 2",
            director: "Brad Bird",
            trailer: "https://www.youtube.com/embed/GOPNVf7J4PU",
            date: "15.06.2018",
            IMDB: 9.3,
            image: "https://s3img.vcdn.vn/123phim/2018/05/gia-dinh-sieu-nhan-2-incredibles-2-15276517886875.jpg",
            description: "Gia Đình Siêu Nhân 2 đánh dấu những chuyến phiêu lưu anh hùng đầy hấp dẫn với sự đổi vai đầy táo bạo. Lần này, mẹ dẻo Helen (Elastigirl) sẽ đi thực chiến giải cứu thế giới trong khi bố khỏe Bob (Mr. Incredible) lùi về hậu phương trông nom những đứa con siêu nhân láu lỉnh gồm: con gái Violet ( siêu năng lực tàng hình và tạo ra từ trường làm chắn bảo vệ), con trai Dash (chạy siêu nhanh) và cậu út Jack-Jack với sức mạnh chưa được khám phá. Một ác nhân bí ẩn xuất hiện với một âm mưu đáng sợ khiến cho gia đình siêu nhân phải “tái xuất giang hồ”. Liệu gia đình siêu nhân sẽ vượt qua khó khăn này như thế nào?",
        },
        {
            name: "Bad Samaritan",
            director: "Dean Devlin",
            trailer: "https://www.youtube.com/embed/2ZiNWzqll04",
            date: "22.06.2018",
            IMDB: 6.3,
            image: "https://s3img.vcdn.vn/123phim/2018/05/bad-samaritan-15272177700673.jpg",
            description: "Những tên trộm đã vướng phải những rắc rối khi đối diện với người phụ nữ bị nhốt trong ngôi nhà mà họ có ý định cướp.",
        },
        {
            name: "Deadpool 2",
            director: "David Leitch",
            trailer: "https://www.youtube.com/embed/bWaJOmasREE",
            date: "18.05.2018",
            IMDB: 8.3,
            image: "https://s3img.vcdn.vn/mobile/123phim/2018/05/deadpool-2-c18-15265236512573_220x310.jpg",
            description: "Về nội dung, qua trailer có thể thấy, trong phần 2 Deadpool sẽ đối đầu với sát nhân Cable, một kẻ đến từ tương lai với âm mưu giết hại một đứa bé – Người mà theo hắn sau này sẽ trở thành một dị nhân đầy quyền năng. Với nỗ lực đảm bảo sự an toàn cho đứa bé, Deadpool sẽ nhận được sự giúp đỡ từ cả những người bạn mới và cũ, và đặc biệt là các thành viên từ một đội quân mới thành lập có tên X-Force.",
        }
    ];

    // slPhimSapChieu():number{
    //     return this.DSPhimSapChieu.length;
    // }
    // @Output("slPhimSapChieu") sendSlPhimSapChieu = new EventEmitter();


}
