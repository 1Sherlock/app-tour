package uz.soft.cosmos.apptourserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.soft.cosmos.apptourserver.entity.template.AbstractEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class News extends AbstractEntity {
    private String title;

    private String shortDescUz;
    private String shortDescRu;
    private String shortDescEn;

    private String descriptionUz;
    private String descriptionRu;
    private String descriptionEn;

    @Column(nullable = false, unique = true)
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    private Attachment photo;
}
