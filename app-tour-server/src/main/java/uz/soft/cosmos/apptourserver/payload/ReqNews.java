package uz.soft.cosmos.apptourserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqNews {
    private UUID id;

    private String titleUz;
    private String titleRu;
    private String titleEn;

    private String shortDescUz;
    private String shortDescRu;
    private String shortDescEn;

    private String descriptionUz;
    private String descriptionRu;
    private String descriptionEn;

    private String url;

    private UUID photo;
}
